import { FC } from "react"
import { RegistrationFormProps } from "../interfaces"

export const SubmitBtn: FC<RegistrationFormProps> = ({ user, setUser, setMistakes }) => {
    const { name, email, password, isAccepted } = user
    const handleClick = () => {
        if (name.length < 3) {
            setMistakes("name")
        } else if (email.length < 3) {
            setMistakes("email")
        } else if (password.length < 3) {
            setMistakes("password")
        } else {
            console.log("You've been succesfully registered!");
            setUser({ name: "", email: "", password: "", isAccepted: false })
            setMistakes([])
        }
    }

    return (
        <div className="btn">
            <button
                type="submit"
                onClick={handleClick}
                disabled={user.isAccepted ? false : true}
                className={user.isAccepted ? "form_btn" : "form_btn-disabled"}
            >Submit</button>
        </div>
    )
}
