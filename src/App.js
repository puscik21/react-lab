import {useState} from "react";
import "milligram"
import LoginForm from "./components/LoginForm";
import Greeting from "./components/Greeting";

function App() {
    const [loggedInEmail, setLoggedInEmail] = useState("");

    const onLogin = (login) => setLoggedInEmail(login);
    const onLogout = () => setLoggedInEmail("");
    const isLoggedIn = loggedInEmail !== ""

    return (
        <div>
            <h1>System do zapisów na zajęcia</h1>
            {isLoggedIn ? <Greeting email={loggedInEmail} onLogout={onLogout}/> : <LoginForm onLogin={onLogin}/>}
        </div>
    );
}

export default App;
