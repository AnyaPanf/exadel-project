import { FC } from "react"
import { Input } from "./Input";
import { RegistrationFormProps } from "../interfaces";
import { Checkbox } from "./Checkbox";
import { SubmitBtn } from "./SubmitBtn";

const RegistrationForm: FC<RegistrationFormProps> = ({ user, setUser }) => {
    const parameters = Object.keys(user)

    return (
        <div className="form">
            <h1 className="form_title">Hi there!</h1>
            <div className="form__inputs">
                <Input parameter={parameters[0]} user={user} setUser={setUser} />
                <Input parameter={parameters[1]} user={user} setUser={setUser} />
                <Input parameter={parameters[2]} user={user} setUser={setUser} />
                <Checkbox parameter={parameters[3]} user={user} setUser={setUser} />
                <SubmitBtn user={user} setUser={setUser} />
            </div>
        </div>
    )
}

export default RegistrationForm
