import { FormEvent, useContext } from "react";
import { useNavigate } from "react-router-dom";
import NotificationContext from "../context/NotificationContext";

export const Upload: React.FC = () => {
    const notificationCtx = useContext(NotificationContext);
    const navigate = useNavigate();
    const handleUpload = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const formData = new FormData(currentTarget);
        const res = await fetch('http://localhost:3000/', {
            method: "POST",
            body: formData,
        });

        if (res.ok) {
            navigate('/files');
            notificationCtx.success("Your file was successfully uploaded!");
        } else {
            notificationCtx.error("Sorry, couldn't upload your document.");
        }
        currentTarget.reset();
    }

    return (
        <div>
            <h1 className="upload_header">Add something new...</h1>
            <form className="upload"
                id="form"
                encType="multipart/form-data"
                onSubmit={handleUpload}>
                <input name="file"
                    id="file"
                    type="file"
                    className="upload_input"
                    required
                />
                <div className="btn">
                    <button
                        type="submit"
                        className="upload_btn"
                    >Submit</button>
                </div>
            </form>
        </div>
    )
};