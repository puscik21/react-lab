const Greeting = ({email, onLogout}) => {
    return (
        <>
            <h2>Hello {email}!</h2>
            <button onClick={() => onLogout()}>Wyloguj mnie</button>
        </>
    )
}

export default Greeting;
