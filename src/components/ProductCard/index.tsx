
import  { Container, Name, Image } from'./style.ts'

interface IProps {
    name: string;
    img: string;

}




function ProductCard({name,img}:IProps) {

    return (
       <Container>
        <Name>
            {name}
        </Name>
        <Image src={img} alt={name}/>
       </Container>
    )
        
    
}
export default ProductCard