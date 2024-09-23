import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const User = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDeleteUser = _id => {
        console.log(_id)

        fetch(`http://localhost:5000/users/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('User delete successfully');
                    const remainingUser = users.filter(user => user._id !== _id);
                    setUsers(remainingUser);
                }
            })
    }

    return (
        <div>
            <h3>{users.length}</h3>
            <div>
                {
                    users.map(user => <p
                        key={user._id}
                    >{user.name}: {user.email} {user._id}
                        <Link to={`/users/${user._id}`}>
                            <button>Update</button>
                        </Link>
                        <button onClick={() => handleDeleteUser(user._id)}>X</button>
                    </p>)
                }
            </div>
        </div>
    );
};

export default User;