import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (

    <div>
       <Link to='/'>Home</Link> <br /> <br />
       <Link to='/about'>About</Link>  <br /> <br />
       <Link to='/contact' >COntact</Link>  <br /> <br />
       <Link to='/footer'> Footer</Link>   <br /> <br />
    </div>
  )
}

export default Navigation