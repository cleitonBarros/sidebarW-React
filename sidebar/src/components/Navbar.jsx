import {Link } from "react-router-dom"
import { List, XSquare } from "phosphor-react";
import {useState, useEffect} from "react"


import { SidebarData } from "./sidebarData";
import "./Navbar.css"



function Navbar(props){
    


    return(
        <>
            <Link to="#" className={props.state ? 'menu-bars ': 'menu-bars active'}>
                <List  size={32} color="#f5f5f5" weight="bold" onClick={props.sidebar} />
            </Link>
            <nav className={props.state ? 'nav-menu ': 'nav-menu active'}>
                <div className="nav-bar-toggle">
                    <Link to="#" className="menu-close">
                        <XSquare  size={32} color="#f5f5f5" weight="bold" onClick={props.sidebar} />
                    </Link>
                </div>
                <ul className="nav-menu-item">
                    {
                    SidebarData.map((item, index)=>{
                        return(
                            <li onClick={props.closeBar } key={index} className={item.cName}>
                                <Link  to={item.path}>
                                    <span>{item.icon}</span><span>{item.title}</span>
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