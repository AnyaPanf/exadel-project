import { log } from "console";
import { FormEvent } from "react";

export const Upload = () => {
    const handleUpload = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const currentTarget = e.currentTarget;
        const formData = new FormData(currentTarget);
        const dataObject = Object.fromEntries(formData);
        const response = await fetch('http://localhost:3000/', {
            method: "POST",
            headers: {
                "Content-type": "application/JSON",
            },
            body: JSON.stringify(dataObject),
        })
        const message = await response.text()
        console.log(message);
        currentTarget.reset();
    }

    return (
        <>
            <form className="upload"
                // method="post"
                // action="/"
                onSubmit={handleUpload}>
                <input name="text"
                    id="text"
                    type="text"
                    className="upload_input"
                />
                <div className="btn">
                    <button
                        type="submit"
                        className="upload_btn"
                    >Submit</button>
                </div>
            </form>
        </>
    )
}