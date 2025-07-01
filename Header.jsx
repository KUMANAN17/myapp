"use client";

import Link from"next/link";

const Header = ({username}) => {
 const  [isloggedIn,setIsLoggedIn] =usestate(false)
const navItems = [
        { href: '/', label: "Home" },
        { href: '/about-us', label: "aboutus" },
];

    return (
        <div className="flex justify-between">
            <h1>logo</h1>

<ul className="flex gap-4">
    {navItems.map((navItem, index) => (
        <li key={index}><link href={navItem.href}></link>
            {navItem.label}
        </li>
    ))}
</ul>

(
    isloggedIn ?<button>logout</button>:<button>login</button>
)



            <p>{username}</p>
        </div>
    );
};  
export default Header;   