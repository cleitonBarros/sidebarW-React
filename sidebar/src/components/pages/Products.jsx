import Section from "../cstyle/Section"
import { getAllTechnologies } from "../../lib/dato-cms";

export const getStaticProps = async()=>{
    const technologies = await  getAllTechnologies();
    return{
        props:{
            technologies: technologies,
        },
        revalidate: 120,
    }
}

function Products({technologies}){
    console.log(technologies)
    return(
        <Section>
            
        </Section>
    )
}
export default Products