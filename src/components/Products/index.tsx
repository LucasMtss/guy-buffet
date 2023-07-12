
import  { Container} from'./style.ts'
import salgados from "../../assets/products/salgados.png"
import mesaMineira from "../../assets/products/mesa-mineira.png"
import mesaDeMassas from "../../assets/products/mesa-de-massas.png"
import mesaDeFrios from "../../assets/products/mesa-de-frios.png"
import botecoMineiro from "../../assets/products/boteco-mineiro.png"
import miniRefeicoes from "../../assets/products/mini-refeicoes.png"
import mesaBaiana from "../../assets/products/mesa-baiana.png"
import mesaDeCrepe from "../../assets/products/mesa-de-crepe.png"
import mesaTropical from "../../assets/products/mesa-tropical.png"
import cascataDeChocolate from "../../assets/products/cascata-de-chocolate.png"
import mesaFestiva from "../../assets/products/mesa-festiva.png"
import caminhaoDeChopp from "../../assets/products/caminhao-de-chopp.png"
import champanheira from "../../assets/products/champanheira.png"
import mesaJaponesa from "../../assets/products/mesa-japonesa.png"
import drinkBar from "../../assets/products/drink-bar.png"
import mesaArabe from "../../assets/products/mesa-arabe.png"
import cafeDaManha from "../../assets/products/cafe-da-manha.png"
import mesaDeGuloseimas from "../../assets/products/mesa-de-guloseimas.png"
import mesaAmericana from "../../assets/products/mesa-americana.png"
import doces from "../../assets/products/doces.png"
import { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/index.tsx'

interface ICard {
    name: string;
    img: string;
}

function Products() {
    const [cards, setCards] = useState([] as ICard[])

    useEffect(() => {
        setCards([
            {
                name: 'Salgados',
                img: salgados
            },
            {
                name: 'Mesa Mineira',
                img: mesaMineira
            },
            {
                name: 'Mesa de Massas',
                img: mesaDeMassas
            },
            {
                name: 'Mesa de frios',
                img: mesaDeFrios
            },
            {
                name: 'Boteco mineiro',
                img: botecoMineiro
            },
            {
                name: 'Mini refeições',
                img: miniRefeicoes
            },
            {
                name: 'Mesa Baiana',
                img: mesaBaiana
            },
            {
                name: 'Mesa de crepe',
                img: mesaDeCrepe
            },
            {
                name: 'Mesa tropical',
                img: mesaTropical
            },
            {
                name: 'Cascata de chocolate',
                img: cascataDeChocolate
            },
            {
                name: 'Mesa festiva',
                img: mesaFestiva
            },
            {
                name: 'Caminhão de chopp',
                img: caminhaoDeChopp
            },
            {
                name: 'Champanheira',
                img: champanheira
            },
            {
                name: 'Mesa Japonesa',
                img: mesaJaponesa
            },
            {
                name: 'Drink Bard',
                img: drinkBar
            },
            {
                name: 'Mesa árabe',
                img: mesaArabe
            },
            {
                name: 'Café da manhã',
                img: cafeDaManha
            },
            {
                name: 'Mesa de guloseimas',
                img: mesaDeGuloseimas
            },
            {
                name: 'Doces',
                img: doces
            },
            {
                name: 'Mesa americana',
                img: mesaAmericana
            },
        ])
    }, []);
    
    return (
      <Container>
        {
            cards.map(card => {
                return (
                    <ProductCard name={card.name} img={card.img} />
                )
            })
        }
      </Container>
    )
}

export default Products;