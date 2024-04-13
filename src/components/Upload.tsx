import { FormEvent } from "react";

export const Upload = () => {
    сonst handleUpload = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const dataObject = Object.fromEntries(formData);
        console.log(dataObject);
        await fetch('http://localhost:3000/', {
            method: "POST",
            headers: {
                "Content-type": "application/JSON",
            },
            body: JSON.stringify(dataObject),
        })
    }

    return (
        <>
            <form className="upload"
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