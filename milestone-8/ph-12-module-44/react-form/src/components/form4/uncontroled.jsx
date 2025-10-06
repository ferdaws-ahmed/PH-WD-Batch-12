


import React, { useRef } from "react";

const UncontrolledForm = () =>{

    const emailRef = useRef('');
    const passRef = useRef('');


    const handleSubmit = (e) =>{

        e.preventDefault();
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        console.log(email,pass)
    }

    return(
        <div>
            <form onSubmit={handleSubmit} >
                <input ref={emailRef} type="email" name="email" placeholder="Email" /><br></br>
                <input ref={passRef} type="password" name="password" placeholder="Password" /><br></br>

                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default UncontrolledForm;