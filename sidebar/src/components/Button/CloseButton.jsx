import styled from "styled-components"
import {  XSquare } from "phosphor-react";

const Xbutton = styled.a `
    cursor: pointer;
    position: absolute;
    top: 1.25rem;
    left: 90%;
    margin-left: 2rem;
    background: none;

    @media(max-width:940px){
        left: 80%;    
    }
  
`;
const Navbartoggle = styled.div`
    position: absolute;
    top: 0;
    background-color: #dddfeb;
    width: 100%;
`;

function CloseButton(props){
    return (
        <Navbartoggle>
            <Xbutton >
                <XSquare  size={32} color="#f5f5f5" weight="bold" onClick={props.sidebar} /> 
            </Xbutton>
        </Navbartoggle>
    )

}
export default CloseButton