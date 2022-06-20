import React, { useEffect, useState } from 'react';
import Note from '../Note/Note';

const NoteList = () => {
    const [note, setNote] = useState([]);

    useEffect( () => {
        const url = `http://127.0.0.1:8000/`;
        fetch(url)
        .then( res => res.json() )
        .then( data => setNote(data) )
    }, []);


    return (
        <div>
            <h2>All Notes {note.length}</h2>

            <div className="notes-list">
                {
                    note.map( (singleNote, index) => <h3 key={index}>{index+1}. {singleNote.title}</h3> )
                }
            </div>
            <Note></Note>
        </div>
    );
};

export default NoteList;