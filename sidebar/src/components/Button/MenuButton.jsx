import styled from "styled-components"
import { List } from "phosphor-react";

const Hamburgerbutton = styled.a `

    position: absolute;
    top: 1.25rem;
    left: 0%;
    margin-left: 2rem;
    background: none;
    transition: opacity 0.2s;
    cursor: pointer;

        &.active{
            opacity:  0;
        }
  
`;

function MenuButton(props){
    return (
        <Hamburgerbutton className={props.state ? " " : " active "}>

            <List size={32} color="#f5f5f5" weight="bold" onClick={props.sidebar} />
            
        </Hamburgerbutton>
    )

}
export default MenuButton