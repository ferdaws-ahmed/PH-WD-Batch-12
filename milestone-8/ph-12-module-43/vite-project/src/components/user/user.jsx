




import React from "react";


const User = ({user}) =>{

    const {name, email, phone} = user;
    return(
        <div className="user-style ">
             <h1>Name: {name}</h1>
             <h3>Email: {email}</h3>
             <h2>Phone: {phone}</h2>
        </div>
    )
}
export default User;