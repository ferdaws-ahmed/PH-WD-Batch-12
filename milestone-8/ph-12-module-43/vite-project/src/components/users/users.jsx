



import React from "react";
import { useLoaderData } from "react-router";
import User from "../user/user";


const Users = () =>{

  const users = useLoaderData();
  console.log(users)

    return(
        <div>
            <p>This is Users</p>

            {
                users.map(user => <User user={user}></User>)
            }
        </div>
    )
}
export default Users;