export interface userDataState {
    name: string;
    email: string;
    password: string;
    isAccepted: boolean;
}

export interface RegistrationFormProps {
    user?: {
        name: string;
        email: string;
        password: string;
        isAccepted: boolean;
    },
    setUser?: React.Dispatch<React.SetStateAction<{
        name: string;
        email: string;
        password: string;
        isAccepted: boolean;
    }
    >>
    parameter?: string,
    messages?: string[],
    setMessages?: React.Dispatch<React.SetStateAction<string[]>>,
    inputRef?: React.MutableRefObject<HTMLInputElement | null>,
    inputRef1?: React.MutableRefObject<HTMLInputElement | null>,
    inputRef2?: React.MutableRefObject<HTMLInputElement | null>,
    inputRef3?: React.MutableRefObject<HTMLInputElement | null>
}