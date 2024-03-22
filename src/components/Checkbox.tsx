import { FC } from "react"
import { RegistrationFormProps } from "../interfaces"

export const Checkbox: FC<RegistrationFormProps> = ({ parameter, user, setUser }) => {
    const handleChange = (e: object) => {
        setUser(prev => prev = { ...prev, [parameter]: !user[parameter] })
    }

    return (
        <div className="form_check">
            <input type="checkbox"
                id="terms"
                className="form_accept"
                onChange={handleChange}
                checked={user[parameter]}>
            </input>
            <label for="terms">Accept terms</label>
        </div>
    )
}
