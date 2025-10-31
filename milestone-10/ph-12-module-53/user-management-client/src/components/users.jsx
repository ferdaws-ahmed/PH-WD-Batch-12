import React, { use } from 'react';

const Users = ({userPromise}) => {
    const user = use(userPromise)
    console.log(user)
    return (
        <>

        <div>
            <h1>Add a User</h1>
            <form >
                <input type="text" name="name" placeholder='Name' /><br></br>
                <input type="email" name="email" placeholder='Email' /><br></br>
                <button>Add user</button>
            </form>
        </div>
        
        <div>
            {
                user.map(user => <p key={user.id}>{user.name} : {user.email}</p>)
            }
        </div>
        </>
        
        
    );
};

export default Users;
