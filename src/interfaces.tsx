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
    parameter?: string,
    setUser?: React.Dispatch<React.SetStateAction<{
        name: string;
        email: string;
        password: string;
        isAccepted: boolean;
    }>>
}