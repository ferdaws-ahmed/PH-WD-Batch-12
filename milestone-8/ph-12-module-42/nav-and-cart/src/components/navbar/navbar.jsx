import React from 'react'
import NavLink from './navLink'



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
  return (
    <div>
        <ul className='flex gap-7'>
            {
                navData.map(data => <NavLink key={data.id} data = {data}></NavLink>)
            }
        </ul>

    </div>
  )
}

export default Navbar