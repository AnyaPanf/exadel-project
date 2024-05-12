import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export const Upload = () => {
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
            navigate('/files');;
        } else {
            alert('Sorry, something went worng...')
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
}