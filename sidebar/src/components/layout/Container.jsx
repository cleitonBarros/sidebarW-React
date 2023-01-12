import Main from "../cstyle/Main"
function Container(props){
    return(
        <Main className={props.state ? "active" :""}>{props.children}</Main>
    )
}
export default Container