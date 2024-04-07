import { FC } from "react"

interface RegistrationFormProps {
    message: string,
}

export const Status: FC<RegistrationFormProps> = ({ message }) => {
    if (message === "name") {
        return (
            <div className="status">
                <p>Your name should include at least 2 symbols.</p>
            </div>
        )
    } else if (message === "email") {
        return (
            <div className="status">
                <p>Your email should include at least 5 symbols and "@".</p>
            </div>
        )
    } else if (message === "password") {
        return (
            <div className="status">
                <p>Your password should include at least 5 symbols.</p>
            </div>
        )
    } else if (message === "success") {
        return (
            <div className="status-success">
                <p>You've been successfully registered!</p>
            </div>
        )
    }
}
