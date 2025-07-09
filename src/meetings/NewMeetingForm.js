import {useState} from "react";

const NewMeetingForm = ({onSubmit}) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const submit = (event) => {
        event.preventDefault();
        if (title !== '') {
            onSubmit({title, description})
        }
    }

    return (
        <form onSubmit={submit}>
            <h3>Dodaj nowe spotkanie</h3>
            <label>Nazwa</label>
            <input type="text" value={title}
                   onChange={(e) => setTitle(e.target.value)}/>
            <label>Opis</label>
            <textarea value={description}
                      onChange={(e) => setDescription(e.target.value)}></textarea>
            <button>Dodaj</button>
        </form>
    );
}

export default NewMeetingForm
