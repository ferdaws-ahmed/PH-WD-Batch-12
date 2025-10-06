

import React, { useState } from "react";



const FormControl = () =>{

    const [pass, setPass] = useState('');
    const [error, setError] = useState('');


    const handleFormControl = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value);


        if(pass.length < 6 ) {

            setError('password must be 6 character of longer.')
        }
        else{
            setError('')
        }
    }

    const handlePasswordOnChange = (e) =>{
        setPass(e.target.value);
        console.log(e.target.value);


        
    }
    
    return(

        <div>
            <form onSubmit={handleFormControl}>
                <input type="text" name="name" placeholder="Name" /><br></br>
                <input type="email" name="email" placeholder="Email" /><br></br>
                <input type="password" onChange={handlePasswordOnChange} defaultValue={pass} name="password" placeholder="Password" /><br></br>
                <input type="submit" value="Submit" />

                <p style={{color:'red'}}>
                    <small>{error}</small>
                </p>
            </form>
        </div>
    )
}


export default FormControl;