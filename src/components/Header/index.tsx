import { Button, Conatiner, Logo } from "./style";
import logoImage from '../../assets/logo.svg'

function Header() {
    return (
        <Conatiner>
            <Logo src={logoImage} />
            <Button>SOLICITAR ORÇAMENTO</Button>
        </Conatiner>
    )

}

export default Header;