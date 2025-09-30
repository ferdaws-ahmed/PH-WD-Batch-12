import React, { useState } from 'react'
import NavLink from './navLink'
import { Menu, X } from 'lucide-react'


const  navData = [
  {
    "id": 1,
    "name": "Home",
    "urlPath": "/"
  },
  {
    "id": 2,
    "name": "About Us",
    "urlPath": "/about"
  },
  {
    "id": 3,
    "name": "Projects",
    "urlPath": "/projects"
  },
  {
    "id": 4,
    "name": "Blog",
    "urlPath": "/blog"
  },
  {
    "id": 5,
    "name": "Contact",
    "urlPath": "/contact"
  }
]

function Navbar() {

 const link = navData.map(data => <NavLink key={data.id} data = {data}></NavLink>)

  const [open, setOpen] = useState(false)
  return (
    <nav className='flex justify-between mx-5 mt-3'>
       <span className='flex gap-3'>
        <span onClick={()=> setOpen(!open)}>
          {
            open?<X className='sm:hidden'></X> :<Menu className='sm:hidden'></Menu>
          }
          <ul className={`sm:hidden ${open ? 'top-10' : ' -top-40'} absolute duration-600`}>
            {
              link
            }
          </ul>
          
        </span>
       <h1>My Project</h1>
       </span>
        <ul className='sm:flex gap-7 hidden '>
            {
                link
            }
        </ul>
        <button>Sign In</button>

    </nav>
  )
}

export default Navbar