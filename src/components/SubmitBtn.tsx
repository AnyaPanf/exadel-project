import { FC } from "react"
import { RegistrationFormProps } from "../interfaces"

export const SubmitBtn: FC<RegistrationFormProps> = ({ user, setUser }) => {
    const { name, email, password, isAccepted } = user
    const handleClick = () => {
        if (name && email && password && isAccepted) {
            console.log("You've been succesfully registered!");
            setUser({ name: "", email: "", password: "", isAccepted: false })
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
