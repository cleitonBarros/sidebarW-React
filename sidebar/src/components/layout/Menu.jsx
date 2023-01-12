import { NavLink } from "react-router-dom"
import { SidebarData } from "../../data/sidebarData"
import styled from "styled-components"
import React from "react";


const Menuitem = styled.ul `
    display: flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    gap: 4rem;  


    
.nav-text{
   list-style: none;
   text-align: left;
   height: 25px;
}

.nav-text a{
    text-decoration: none;
    text-transform: uppercase;
    color: #f5f5f5;
    font-size: 1.5rem;
    position: relative;
    display: flex;
    align-items: center;
    gap : 1rem;

   
    height:100%;
    padding: 0 1rem;
    border-radius: 0.25rem;

    transition: color  .6s;
}
.nav-text a span{
    display: flex;
    justify-content: center;
    align-items: center;
   
}
.nav-text a.active,
.nav-text a:hover{
    color: #ec0606;
    font-weight: bold;
}
.nav-text a:before{
    position:absolute;
    bottom:-1rem;
    content: " ";
    left: 0;
    width:100%;
    height:3px;
    background:#ffffff;
    transform:scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
}

.nav-text a.active:before,
.nav-text a:hover:before{
    transform:scaleX(1);
    transform-origin: left;
}


    @media(max-width:940px){
    
        align-items: center;

        .nav-text{
            width: auto;
        }

        .nav-text a{  
            font-size: 2.5rem;
       
        }
    }

`;

function Item(props){

    const sidebar = SidebarData.map((item, index)=>{
        return(
            <li onClick={props.closeBar } key={index} className={item.cName} >
                <NavLink className={({ isActive }) => isActive ? "active" : ""}  to={item.path}>
                    <span>{item.title}</span>
                </NavLink>

            </li>
        )
    })
    return(
        <Menuitem>
            {sidebar}
        </Menuitem>
    )

}
export default Item;