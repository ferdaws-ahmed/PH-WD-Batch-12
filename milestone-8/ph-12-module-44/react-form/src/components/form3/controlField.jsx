

import React, { useState } from "react";



const FormControl = () =>{

    const [pass, setPass] = useState('');


    const handleFormControl = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value)
    }

    const handlePasswordOnChange = (e) =>{
        setPass(e.target.value)
        console.log(e.target.value)
    }
    
    return(

        <div>
            <form onSubmit={handleFormControl}>
                <input type="text" name="name" placeholder="Name" /><br></br>
                <input type="email" name="email" placeholder="Email" /><br></br>
                <input type="password" onChange={handlePasswordOnChange} defaultValue={pass} name="password" placeholder="Password" /><br></br>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}


export default FormControl;