import {Link, NavLink } from "react-router-dom"
import { List, XSquare } from "phosphor-react";
import {useState, useEffect} from "react"
import bird from "../assets/undraw_bird.svg"
import { SidebarData } from "../data/sidebarData";
import "./Navbar.css"
import Menubutton from "../components/Button/MenuButton"
import Closebutton from "../components/Button/CloseButton"
import Nav from "../components/cstyle/Nav"


function Navbar(props){
    


    return(
        <>
            {/* <a to="#" className={props.state ? 'menu-bars ': 'menu-bars active'}>
                <List  size={32} color="#f5f5f5" weight="bold" onClick={props.sidebar} />
            </a> */}
            <Menubutton state={props.state} sidebar={props.sidebar}/>
            <nav className={props.state ? 'nav-menu ': 'nav-menu active'}>
                <div className="nav-bar-toggle">
                    <Link  to="#" className="menu-close">
                        <XSquare  size={32} color="#f5f5f5" weight="bold" onClick={props.sidebar} />
                    </Link>
                </div>
                <div className="logo">
                    Logo<span>Base</span>.
                </div>
                <ul className="nav-menu-item">
                    {
                    SidebarData.map((item, index)=>{
                        return(
                            <li onClick={props.closeBar } key={index} className={item.cName}>
                                
                                <NavLink className={({ isActive }) => isActive ? "active" : ""}  to={item.path}>
                                    <span>{item.title}</span>
                                </NavLink>
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