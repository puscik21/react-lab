import {useState} from "react";
import "milligram"
import LoginForm from "./components/LoginForm";
import UserPanel from "./components/UserPanel";
import styled from "styled-components";

function App() {
    const [loggedInEmail, setLoggedInEmail] = useState("");

    const onLogin = (login) => setLoggedInEmail(login);
    const onLogout = () => setLoggedInEmail("");
    const isLoggedIn = loggedInEmail !== ""

    return (
        <Container>
            <h1>System do zapisów na zajęcia</h1>
            {isLoggedIn ? <UserPanel email={loggedInEmail} onLogout={onLogout}/> : <LoginForm onLogin={onLogin}/>}
        </Container>
    );
}

export default App;

const Container = styled.div`
    margin: 2rem;
`
