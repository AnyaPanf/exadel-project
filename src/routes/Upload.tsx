import { FormEvent } from "react";

export const Upload = () => {

    const handleUpload = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const formData = new FormData(currentTarget);

        const response = await fetch('http://localhost:3000/', {
            method: "POST",
            body: formData,
        })
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