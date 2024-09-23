import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedUser = useLoaderData();
    // console.log(loadedUser._id)

    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const updateUser = { name, email }
        // console.log(updateUser)

        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res=> res.json())
        .then(data=> {
            console.log(data)
            if(data.modifiedCount>0){
                alert('user update succesfully')
            }
        })
    }

    return (
        <div>
            <h3>Update data for {loadedUser.name}</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" defaultValue={loadedUser.name} id="" /><br />
                <input type="email" name="email" defaultValue={loadedUser.email} id="" /><br />
                <input type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default Update;