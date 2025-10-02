



import React from 'react'
import { Link } from 'react-router';

const Header = () => {


    return(
        <div>
            <h1>This is header</h1>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/mobiles'>Mobile</Link>
                <Link to='/laptop'>Laptop</Link>
                <Link to='/users'>Users</Link>
                <Link to='/users2'>User2</Link>
                
            </nav>
        </div>
    )
}

export default Header;