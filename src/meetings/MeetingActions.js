import styled from "styled-components";

const MeetingActions = ({email, meetingTitle, meetings, setMeetings}) => {
    return (
        <ButtonGroup>
            <button onClick={() => signUpForMeeting(email, meetingTitle, meetings, setMeetings)}>Zapisz sie</button>
            <SignOutFromMeetingButton email={email} meetingTitle={meetingTitle} meetings={meetings}
                                      setMeetings={setMeetings}/>
            <RemoveEmptyMeetingButton meetingTitle={meetingTitle} meetings={meetings} setMeetings={setMeetings}/>
        </ButtonGroup>
    )
}

const SignOutFromMeetingButton = ({email, meetingTitle, meetings, setMeetings}) => {
    const participants = getOrEmptyArray(getMeetingByTitle(meetings, meetingTitle).participants)
    if (!participants.includes(email)) return null;
    return (
        <button className="button button-outline"
                onClick={() => signOutFromMeeting(email, meetingTitle, meetings, setMeetings)}>
            Wypisz sie
        </button>
    )
}

const RemoveEmptyMeetingButton = ({meetingTitle, meetings, setMeetings}) => {
    const participants = getOrEmptyArray(getMeetingByTitle(meetings, meetingTitle).participants)
    if (!participants || participants.length === 0) {
        return <button onClick={() => removeMeeting(meetingTitle, meetings, setMeetings)}>Usuń spotkanie</button>;
    }
    return null;
}

const getMeetingByTitle = (meetings, meetingTitle) => {
    return meetings.filter(meeting => meeting.title === meetingTitle)[0];
}

const removeMeeting = (meetingTitle, meetings, setMeetings) => {
    const newMeetings = meetings.filter(meeting => meeting.title !== meetingTitle);
    setMeetings(newMeetings)
}

const signUpForMeeting = (email, meetingTitle, meetings, setMeetings) => {
    const newMeetings = meetings.map(meeting => {
        // TODO: it should be based on ID
        if (meeting.title === meetingTitle) {
            const participants = getOrEmptyArray(meeting.participants)
            if (participants.includes(email)) {
                return meeting;
            }
            return {
                ...meeting,
                participants: [...participants, email],
            };
        }
        return meeting;
    });
    setMeetings(newMeetings);
}

const signOutFromMeeting = (email, meetingTitle, meetings, setMeetings) => {
    const newMeetings = meetings.map(meeting => {
        // TODO: it should be based on ID
        if (meeting.title === meetingTitle) {
            const participants = getOrEmptyArray(meeting.participants)
            if (!participants.includes(email)) {
                return meeting;
            }
            return {
                ...meeting,
                participants: participants.filter(e => e !== email),
            };
        }
        return meeting;
    });
    setMeetings(newMeetings);
}

const getOrEmptyArray = (field) => Array.isArray(field) ? field : []

export default MeetingActions;

const ButtonGroup = styled.div`
    display: flex;
    gap: 2rem;
    justify-content: flex-end;
`;
