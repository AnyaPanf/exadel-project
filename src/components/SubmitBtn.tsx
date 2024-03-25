import { FC } from "react"
import { RegistrationFormProps } from "../interfaces"

export const SubmitBtn: FC<RegistrationFormProps> = ({ user, setUser, setMessages, inputRef1, inputRef2, inputRef3 }) => {
    const { name, email, password, isAccepted } = user
    const handleClick = () => {

        if (name.length < 2) {
            setMessages("name")
            inputRef1.current?.focus()
        } else if (email.length <5 || !email.includes("@")) {
            setMessages("email")
            inputRef2.current?.focus()
        } else if (password.length < 5) {
            setMessages("password")
            inputRef3.current?.focus()
        } else {
            setMessages("success")
            setUser({ name: "", email: "", password: "", isAccepted: false })
            setTimeout(() => {
                setMessages([])
            }, 2000)
        }
    }

    return (
        <div className="btn">
            <button
                type="submit"
                onClick={handleClick}
                disabled={isAccepted ? false : true}
                className={isAccepted ? "form_btn" : "form_btn-disabled"}
            >Submit</button>
        </div>
    )
}
