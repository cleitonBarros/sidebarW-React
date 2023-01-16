import styled from "styled-components"
import { useQuery } from "graphql-hooks";


const Card = styled.div `

    display: flex;
    flex-direction: column; 
    
    align-items: center;
    max-width: 90%;
    border: 2px solid #ffffff;

    padding: 2rem;
    margin: 5rem  0;
    gap: 2rem

    img{
        width: 100%;
    }
    
    h2{
        text-align: center;
        font-size:2rem
    }
    p{
        font-size: 1rem
    }
    small{
        font-size: 1.7rem;
        font-weight: bold;
    }






`;


const HOMEPAGE_QUERY = `query {
    allProdutosModels {
      id
      image{
        url(imgixParams: {fm: jpg, fit:crop, w: 150 ,h:150 })
      }
      title
      description
      price
    
    }   
}`;
  
function CardProduct(){
    const { loading, error, data } = useQuery(HOMEPAGE_QUERY, {
        variables: {
          limit: 10
        }
      });
      if (loading) return "Loading...";
      if (error) return "Something Bad Happened";
    return(
        <>
            {data.allProdutosModels.map(item => {
                    return(
                        <Card>
                            <img src={item.image.url} alt="imagem do produto" />
                            <h2>{item.title}</h2>
                            <p>{item.description}</p>  
                            <small>{`R$ ${item.price},00`}</small>

                        </Card>
                )
                })}  

        </>
    )

}
export default CardProduct