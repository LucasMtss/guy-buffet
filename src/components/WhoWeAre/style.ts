import { styled } from "styled-components";
import image from "../../assets/employers.png"
export const Container = styled.section`
width: 100vw;
background-image: url(${image});
display: flex;
justify-content: center;
padding: 32px;


`
export const Content = styled.div`
width: 100%;
max-width: 1200px;
color: #fff;
display: flex;
flex-direction: column;

`
export const Title = styled.h2`
font-size: 28px;
margin-bottom: 16px;

`
export const Text = styled.p`
font-size: 20px;
margin-bottom: 48px;
ul{
    margin-left:8px;
    
}

`

