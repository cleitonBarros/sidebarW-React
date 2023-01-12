import styled from "styled-components"

const Nav = styled.nav `

    background-color: #060b26;
    width:  21%;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content:space-around;
    
    position: absolute;
    top: 0;
    left: -100%; 
    transition: left 1500ms ;

    &.active{
        left: 0;
        transition: left 900ms ;
    }

    
    @media(max-width:940px){

        width:  100%;     
        transition: left 600ms ;
       
    }

  
`;

export default Nav