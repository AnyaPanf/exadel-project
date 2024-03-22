import { FC } from "react"
import { RegistrationFormProps } from "../interfaces"
import { MistakeMessage } from "./MistakeMessage"

export const Input: FC<RegistrationFormProps> = ({ parameter, user, setUser, mistakes }) => {
    const handleChange = (e: object) => {
        setUser(prev => prev = { ...prev, [parameter]: e.target.value })
    }

    return (
        <div>
            <input type="text"
                className="form_input"
                placeholder={`Enter your ${parameter}`}
                onChange={handleChange}
                value={user[parameter]}></input>
            <MistakeMessage mistakes={mistakes} parameter={parameter}/>
        </div>
    )
}
