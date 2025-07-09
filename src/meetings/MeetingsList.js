import MeetingActions from "./MeetingActions";

const MeetingsList = ({email, meetings, setMeetings}) => {
    if (meetings.length === 0) return null;
    return (
        <table>
            <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Uczestnicy</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {
                meetings.map((meeting, index) => <tr key={index}>
                    <td>{meeting.title}</td>
                    <td>{meeting.description}</td>
                    <td>{Array.isArray(meeting.participants) ? meeting.participants.map(par => <p
                        key={par}>{par}</p>) : null}</td>
                    <td><MeetingActions email={email} meetingTitle={meeting.title} meetings={meetings}
                                        setMeetings={setMeetings}/></td>
                </tr>)
            }
            </tbody>
        </table>
    );
}

export default MeetingsList;
