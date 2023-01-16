import Section from "../cstyle/Section"
import { useQuery } from "graphql-hooks";
import Card from "../layout/CardProduct"




function Products(){   
    return(
        <Section>
            <div className="productContainer">
                <Card />
            </div>  
        </Section>
    )
}
export default Products