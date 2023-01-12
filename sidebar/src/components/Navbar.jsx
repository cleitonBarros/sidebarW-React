
import Menubutton from "../components/Button/MenuButton"
import Closebutton from "../components/Button/CloseButton"
import Nav from "../components/cstyle/Nav"
import Logo from "../components/cstyle/Logo"
import Menu from "../components/layout/Menu"


function Navbar(props){
    


    return(
        <>
            <Menubutton state={props.state} sidebar={props.sidebar}/>
            <Nav className={props.state ? ' ': 'active'}>

                <Closebutton sidebar={props.sidebar} />

                <Logo > Logo<span>Base</span>.  </Logo>

                <Menu  closeBar={props.closeBar} />
            </Nav>
        </>
    )
}
export default Navbar