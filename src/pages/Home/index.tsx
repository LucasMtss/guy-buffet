import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import { Container } from "./style";





function Home(){
    return (
        <Container>  
        <Header />
        <Navbar/>
        <Banner/>
        
        </Container>
      
    )
}

export default Home;