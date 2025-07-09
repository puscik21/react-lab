import MeetingsPage from "../meetings/MeetingsPage";
import styled from "styled-components";

const UserPanel = ({email, onLogout}) => {
    return (
        <Container>
            <HeaderRow>
                <h2>Hello {email}!</h2>
                <button onClick={() => onLogout()}>Wyloguj mnie</button>
            </HeaderRow>
            <MeetingsPage email={email} />
        </Container>
    )
}

export default UserPanel;

const Container = styled.div`
    margin: 1rem;
`

const HeaderRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
`;
