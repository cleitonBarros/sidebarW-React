
function Products(props){
    
    return(
        <div className={props.state ? 'products active': 'products'}>
            <h1>Products</h1>
        </div>
    )
}
export default Products