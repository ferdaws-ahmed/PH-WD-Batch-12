
import React, { use } from "react";


const User2 = ({userPromise}) => {

    const user2 = use(userPromise);
    console.log(user2);
    return(
        <div>
            <p>this is user 2</p>
        </div>
    )
}

export default User2