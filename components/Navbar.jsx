import React from 'react'
import { Link } from 'react-scroll';

const links = [{
    path: 'home',
    name: 'home',
    offset: -50
},
{
    name: 'menu',
    path: 'menu',
    offset: -50
},
{
    path: 'about',
    name: 'about',
    offset: -150
},
{
    path: 'contact',
    name: 'contact',
    offset: -0
}];

const Navbar = ({ containerStyles, linkStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        {links.map((link, index) => {
        return (
            <Link
            key={index}
            to={link.path}
            spy={true}
            smooth={true}
            offset={link.offset}
            duration={500}
            className={`${linkStyles}`}>
                {link.name}
            </Link>
        );
        })}
    </nav>
  )
}

export default Navbar