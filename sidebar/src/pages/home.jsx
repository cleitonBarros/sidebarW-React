
function Home(props){
   
    
    return(
        <div className={props.state ? 'home active': 'home'}>
            <h1>Home</h1>
        </div>
    )
}
export default Home