const API_URL ='https://graphql.datocms.com/'
const API_TOKEN = '1e372eb4aa4f5d762c3b88f8271012'


async function fetchCmsAPI(query, {variables}={}){
    const res = await fetch(API_URL,{
        method: 'POST',
        headers:{
            'content-type': 'application/json',
            "Authorization": `Bearer ${API_TOKEN}` ,  
        },
        body: JSON.stringify({
            query,
            variables,
        }),
    })

    const json = await res.json();
    if(json.errors){
        throw new Error("failed to fetch API")
    }
    return json.data

}

export async function  getAllTechnologies(){
    const data = await fetchCmsAPI(`
        {
        allProdutosModels {
            id
            image{
                url(imgixParams: {fm: jpg, fit:crop, w: 300 ,h:300 })
            }
            title
            description
            price
            }
        }`
    )
    return data.allProdutosModels
}
export default {getAllTechnologies}