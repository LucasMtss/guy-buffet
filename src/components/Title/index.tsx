
import  { Text } from'./style.ts'

interface IProps {
    text: string;
}

function Title({ text}: IProps) {

    return (
       <Text>
        {text}

       </Text>
    )
        
    
}
export default Title