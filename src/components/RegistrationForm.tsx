import { FC, useState, useRef } from "react"
import { Input } from "./Input";
import { RegistrationFormProps } from "../interfaces";
import { Checkbox } from "./Checkbox";
import { SubmitBtn } from "./SubmitBtn";
import { Status } from "./Status";

const RegistrationForm: FC<RegistrationFormProps> = ({ user, setUser }) => {
    const [mistakes, setMistakes] = useState<string[]>([])
    const parameters = Object.keys(user)
    const inputRef1 = useRef<HTMLInputElement | null>(null)
    const inputRef2 = useRef<HTMLInputElement | null>(null)
    const inputRef3 = useRef<HTMLInputElement | null>(null)


    return (
        <div className="form">
            <h1 className="form_title">Hi there!</h1>
            <div className="form__inputs">
                <Input parameter={parameters[0]} user={user} setUser={setUser} mistakes={mistakes} inputRef={inputRef1} />
                <Input parameter={parameters[1]} user={user} setUser={setUser} mistakes={mistakes} inputRef={inputRef2} />
                <Input parameter={parameters[2]} user={user} setUser={setUser} mistakes={mistakes} inputRef={inputRef3} />
                <Status mistakes={mistakes} />
                <Checkbox parameter={parameters[3]} user={user} setUser={setUser} />
                <SubmitBtn user={user} setUser={setUser} setMistakes={setMistakes} inputRef1={inputRef1} inputRef2={inputRef2} inputRef3={inputRef3} />
            </div>
        </div>
    )
}

export default RegistrationForm
