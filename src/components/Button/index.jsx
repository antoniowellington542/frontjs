import { FC } from "react";
import { ButtonContainer } from "./styles";


export const Button = ({color, size, text, onClick }) => {
    return(
        <ButtonContainer
            type="submit"
            onClick={onClick}
            color={color} 
            size={size} 
        >
            {text}
        </ButtonContainer>
    )
}