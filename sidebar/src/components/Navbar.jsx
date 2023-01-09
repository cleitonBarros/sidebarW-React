import {Link } from "react-router-dom"
import { List, XSquare } from "phosphor-react";
import {useState } from "react"

import { SidebarData } from "./sidebarData";
import "./Navbar.css"



function Navbar(){
    const [sidebar, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!sidebar)

    return(
        <>
            <div className="navbar">
                <Link to="#" className="menubars">
                    <List size={24} color="#b16620" onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active': 'nav-menu'}>
                <ul className="nav-menu-item">
                    <li className="nav-bar-toggle">
                        <Link to="#" className="menu-bars">
                        <XSquare size={24} color="#b16620" />
                        </Link>
                    </li>
                    {
                    SidebarData.map((item, index)=>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}<span>{item.title}</span>
                                </Link>
                            </li>

                        )
                    })
                    }
                </ul>
            </nav>
        </>
    )
}
export default Navbar