import { FC } from "react"
import { RegistrationFormProps } from "../interfaces"

export const MistakeMessage: FC<RegistrationFormProps> = ({ mistakes, parameter }) => {
    console.log(mistakes);

    return (
        <div className="mistake">
            <p className="mistake_message"
                style={{ display: mistakes.includes(parameter) ? 'block' : 'none' }}>
                {`Your ${parameter} should include at least 3 symbols.`}</p>
        </div>
    )
}
