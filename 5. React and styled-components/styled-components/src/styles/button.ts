import styled from "styled-components"

export const Button = styled.button`
    border: 2px solid ${props => 
        props.color ? props.color : 'black'};
    background-color: transparent;
    color: ${props => 
        props.color ? props.color : 'black'};
    cursor: pointer;
    font-size: 14px;
    height: 35px;
    width: 100px;
    border-radius: 3px;
    margin-right: 5px;
    font-family: system-ui;

    &:hover {
        background-color: ${props => 
            props.color ? props.color : 'black'};
        color: white;
    }
`;