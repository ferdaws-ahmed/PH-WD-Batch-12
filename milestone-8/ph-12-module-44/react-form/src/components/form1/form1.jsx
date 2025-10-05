


import React from "react";


const Form1 = () =>{

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        console.log(e.target.name.value, e.target.email.value)

    }

    return(
        <div>
            <form onSubmit={handleOnSubmit}>
                <input type="text" name="name" />
                <br></br>
                <input type="email" name="email"/>
                <br></br>
                <input type="submit"  value="Submit" />
            </form>
        </div>
    )
}
export default Form1;