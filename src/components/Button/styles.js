import styled from 'styled-components';



export const ButtonContainer = styled.button`
    background-color: ${
        ({color})=> color === 'primary' ? '#F3A126' 
            : color === 'secondary' ? '#21AE1E' 
            : '#D4D4D4'
    };
    width: ${
        ({size}) => size === 'lg' ? '100%' : size === 'md' ? '75%' : '50%'
    };
    padding: 0.8em;
    margin-top: 1em;
    text-align: center;
    border-radius: 6px;
    color: #FFFFFF;
    font-weight: 700;
    font-size: 16px;
    border: none;
    box-shadow: 0px 4px 4px rgba(135, 135, 135, 0.25);
`