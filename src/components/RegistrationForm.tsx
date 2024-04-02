import { useState, useRef } from "react"
import { userState } from '../interfaces'
import { Status } from "./Status";

const RegistrationForm = () => {
    const [user, setUser] = useState<userState>({
        name: "",
        email: "",
        password: "",
        isAccepted: false,
    })
    const { name, email, password, isAccepted } = user
    const [message, setMessage] = useState<string>("")
    const inputRef1 = useRef<HTMLInputElement | null>(null)
    const inputRef2 = useRef<HTMLInputElement | null>(null)
    const inputRef3 = useRef<HTMLInputElement | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUser(prev => prev = { ...prev, [e.target.id]: e.target.value })
    }

    const handleAccept = () => {
        setUser(prev => prev = { ...prev, isAccepted: !isAccepted })
    }

    // const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.preventDefault();
    //     const regForm = new FormData(e.target)
    //     const newUser = Object.fromEntries(regForm)

    //     console.log(newUser);
    //     console.log(newUser.name.length);

    //     if (newUser.name.length < 2) {
    //         setMessage("name")
    //         inputRef1.current?.focus()
    //     } else if (newUser.email.length < 5 || !email.includes("@")) {
    //         setMessage("email")
    //         inputRef2.current?.focus()
    //     } else if (newUser.password.length < 5) {
    //         setMessage("password")
    //         inputRef3.current?.focus()
    //     } else {
    //         setMessage("success")
    //         setUser({ name: "", email: "", password: "", isAccepted: false })
    //         setTimeout(() => {
    //             setMessage("")
    //         }, 2000)
    //     }
    //     e.target.reset();
    // }

    const handleSubmit = async (e) => {
        e.preventDefault();
        // Use FormData to get the input values
        const formData = new FormData(e.target);
        // Optionally, convert FormData into an object
        const dataObject = Object.fromEntries(formData);
        // Process the data
        await fetch("/api/form", {
          method: "POST",
          body: JSON.stringify(dataObject)
        });
        // Clear the form
       e.target.reset();
      };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h1 className="form_title">Hi there!</h1>
            <div className="form__inputs">
                <input name="name"
                    id="name"
                    type="text"
                    className="form_input"
                    placeholder="Enter your name."
                    // value={name}
                    ref={inputRef1}
                    // onChange={handleChange} 
                    required />
                <input name="email"
                    id="email"
                    type="email"
                    className="form_input"
                    placeholder="Enter your e-mail."
                    // value={email}
                    ref={inputRef2}
                    // onChange={handleChange} 
                    required />
                <input name="password"
                    id="password"
                    type="password"
                    className="form_input"
                    placeholder="Enter your password."
                    // value={password}
                    ref={inputRef3}
                    // onChange={handleChange} 
                    required />
            </div>
            <div className="form_check">
                <input type="checkbox"
                    name="terms"
                    className="form_accept"
                    onChange={handleAccept}
                    checked={isAccepted}>
                </input>
                <label htmlFor="terms">Accept terms</label>
            </div>
            <Status message={message} />
            <div className="btn">
                <button
                    type="submit"
                    disabled={isAccepted ? false : true}
                    className={isAccepted ? "form_btn" : "form_btn-disabled"}
                >Submit</button>
            </div>
        </form>




        // <div className="form">
        //     <h1 className="form_title">Hi there!</h1>
        //     <form className="form__inputs">
        //         <input id="name"
        //             className="form_input"
        //             placeholder="Enter your name."
        //             value={name}
        //             ref={inputRef1}
        //             onChange={handleChange} required />
        //         <input id="email"
        //             className="form_input"
        //             placeholder="Enter your e-mail."
        //             value={email}
        //             ref={inputRef2}
        //             onChange={handleChange} required />
        //         <input id="password"
        //             className="form_input"
        //             placeholder="Enter your password."
        //             value={password}
        //             ref={inputRef3}
        //             onChange={handleChange} required />
        //     </form>
        //     <div className="form_check">
        //         <input type="checkbox"
        //             id="terms"
        //             className="form_accept"
        //             onChange={handleAccept}
        //             checked={isAccepted}>
        //         </input>
        //         <label htmlFor="terms">Accept terms</label>
        //     </div>
        //     <Status message={message} />
        //     <div className="btn">
        //         <button
        //             type="submit"
        //             onClick={handleClick}
        //             disabled={isAccepted ? false : true}
        //             className={isAccepted ? "form_btn" : "form_btn-disabled"}
        //         >Submit</button>
        //     </div>
        // </div>
    )
}

export default RegistrationForm 
