import {useState} from "react";

const LoginForm = ({onLogin}) => {
    const [email, setEmail] = useState("my-mail@gmail.com");

    return (
        <div>
            <label>Zaloguj sie, pliska:</label>
            <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>
            <button onClick={() => onLogin(email)}>Login</button>
        </div>
    )
}

export default LoginForm;
