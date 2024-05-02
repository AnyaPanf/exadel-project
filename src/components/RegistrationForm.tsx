import { useState, useRef, FormEvent } from "react"
import { Status } from "./Status";

const RegistrationForm = () => {
    const [accept, setAccept] = useState<boolean>(false)
    const [message, setMessage] = useState<string>("")
    const inputRef1 = useRef<HTMLInputElement | null>(null)
    const inputRef2 = useRef<HTMLInputElement | null>(null)
    const inputRef3 = useRef<HTMLInputElement | null>(null)

    const validate = (name: string, email: string, password: string) => {
        if (name.length < 2) {
            setMessage("name")
            inputRef1.current?.focus()
        } else if (email.length < 5 || !email.includes("@")) {
            setMessage("email")
            inputRef2.current?.focus()
        } else if (password.length < 5) {
            setMessage("password")
            inputRef3.current?.focus()
        } else {
            setMessage("success")
            setAccept(false)
            setTimeout(() => {
                setMessage("")
            }, 2000)
        }
    }

    const handleAccept = () => {
        setAccept(!accept)
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const dataObject = Object.fromEntries(formData);
        const { name, email, password } = dataObject
        validate(name as string, email as string, password as string)
        // await fetch(http:/localhost:3000, {
        //     method: "POST",
        //     headers: {
        //     "Content-type": "application/JSON",
        // },
        //     body: JSON.stringify(dataObject),
        // })
        if (message === 'submit') {
            e.currentTarget.reset()
        }
    };

    return (
        <form
            className="form"
            onSubmit={handleSubmit}>
            <h1 className="form_title">Hi there!</h1>
            <div className="form__inputs">
                <input name="name"
                    id="name"
                    type="text"
                    className="form_input"
                    placeholder="Enter your name."
                    ref={inputRef1}
                />
                <input name="email"
                    id="email"
                    type="email"
                    className="form_input"
                    placeholder="Enter your e-mail."
                    ref={inputRef2}
                />
                <input name="password"
                    id="password"
                    type="password"
                    className="form_input"
                    placeholder="Enter your password."
                    ref={inputRef3}
                />
            </div>
            <div className="form_check">
                <input type="checkbox"
                    name="terms"
                    id="terms"
                    className="form_accept"
                    onChange={handleAccept}
                    checked={accept}>
                </input>
                <label htmlFor="terms">Accept terms</label>
            </div>
            <Status message={message} />
            <div className="btn">
                <button
                    type="submit"
                    disabled={accept ? false : true}
                    className={accept ? "form_btn" : "form_btn-disabled"}
                >Submit</button>
            </div>
        </form>
    )
}

export default RegistrationForm 