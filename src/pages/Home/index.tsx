import Banner from "../../components/Banner";
import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import Title from "../../components/Title";
import WhoWeAre from "../../components/WhoWeAre";
import { Container, } from "./style";





function Home(){
    return (
        <Container>  
        <Header />
        <Navbar/>
        <Banner/>
        <Title text="Quem Somos"/>
        <WhoWeAre/>
        
        </Container>
      
    )
}

export default Home;