import React, { use, useState } from 'react';

const User = ({usersPromise}) => {

     const initialUsers = use(usersPromise);
      const [users, setUsers] = useState(initialUsers);
    const handleAddUser = (e) =>{
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        
        const newUser = {name, email};


        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            }, 
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            e.target.reset()


            newUser._id = data.insertedId;
            const newUsers = [...users, newUser];
            setUsers(newUsers);
        }
        
            
    )
    }


    return (
        <div>
            <form onSubmit={handleAddUser}>
                <input type="text" name='name' placeholder='Name' /><br></br>
                <input type="email" name='email' placeholder='Email' /><br></br>
                
                <button>Add User</button>
            </form>

            <p>----------------------------</p>

            <div>
                {
                    users.map(user => <p key={user._id}>{user.name}: {user.email}</p>)
                }
            </div>
        </div>
    );
};

export default User;
