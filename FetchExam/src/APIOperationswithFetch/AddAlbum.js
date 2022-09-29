import React, { useState } from 'react'

function AddAlbum() {

    const [userId, setuserId] = useState('');
    const [title, settitle] = useState('');

    const addNewAlbum = () => {

        let newAlbum = {
            userId: userId,
            title: title
        }

        //FETH POST REQUEST
        fetch('https://jsonplaceholder.typicode.com/albums', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newAlbum)
        })
            .then(res => res.json())
            .then(data => {
                console.log('DATA', data);
            })
    }


    return (<>

        <div>
            <label>UserId:</label>
            <input type='number' value={userId} onChange={(e) => setuserId(e.target.value)} />
        </div>

        <div>
            <label>Title:</label>
            <input type='text' value={title} onChange={(e) => settitle(e.target.value)} />
        </div>

        <div>
            <button onClick={() => addNewAlbum()}>Add New Album</button>
        </div>

    </>
    )
}

export default AddAlbum