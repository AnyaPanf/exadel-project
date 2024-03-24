import { FC } from "react"
import { RegistrationFormProps } from "../interfaces"

export const Status: FC<RegistrationFormProps> = ({ mistakes }) => {
    if (mistakes.includes("name")) {
        return (
            <div className="status">
                <p>Your name should include at least 2 symbols.</p>
            </div>
        )
    } else if (mistakes.includes("email")) {
        return (
            <div className="status">
                <p>Your email should include "@".</p>
            </div>
        )
    } else if (mistakes.includes("password")) {
        return (
            <div className="status">
                <p>Your password should include at least 5 symbols.</p>
            </div>
        )
    } else if (mistakes.includes("success")) {
        return (
            <div className="status-success">
                <p>You've been successfully registered!</p>
            </div>
        )
    }
}
