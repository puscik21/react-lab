import {useState} from "react";
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

const MeetingsPage = ({email}) => {
    const [meetings, setMeetings] = useState([]);
    const [isNewMeetingFormOpened, setNewMeetingFormOpened] = useState(false);

    function handleNewMeeting(meeting) {
        const nextMeetings = [...meetings, meeting];
        setMeetings(nextMeetings);
        setNewMeetingFormOpened(false);
    }

    const AddNewMeetingButton = () => (
        <button onClick={() => setNewMeetingFormOpened(true)}>Dodaj nowe zajecie</button>
    )

    return (
        <div>
            <h2>Zajęcia ({meetings.length})</h2>
            {isNewMeetingFormOpened ?
                <NewMeetingForm onSubmit={(meeting) => handleNewMeeting(meeting)}/> :
                <AddNewMeetingButton/>}
            <MeetingsList email={email} meetings={meetings} setMeetings={setMeetings}/>
        </div>
    )
}

export default MeetingsPage
