


import React from "react";
import useInputField from "../customHook/useInputField";

const HookForm = ()=>{

    const [name, nameOnChange] = useInputField('');
    const [email, emailOnChange] = useInputField('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(name)
        console.log(email)
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" defaultValue={name} onChange={nameOnChange} name="name" placeholder="Name"/><br></br>
                <input defaultValue={email} onChange={emailOnChange} type="email" name="email" placeholder="Email"/><br></br>
                {/* <input type="text" name="name" placeholder="Name"/> */}
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default HookForm;