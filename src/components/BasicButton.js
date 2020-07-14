import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const BasicButton = ({ link, desc, color, RLpadding }) => {

    const Button = styled.button`
        margin: 0.4rem;
        border-radius: 15px;
        background-color: ${color};
        text-align: center;
        color: #ffffff;
        font-size: 1.5rem;
        padding: 1rem ${RLpadding} 1rem ${RLpadding};
        font-weight: 400;
        border: 0;
        cursor: pointer;
        transition: 0.4s;
         &:focus{
             outline: none;
         }
         &:hover{
             transform: scale(1.01);
         }
        `


    const Wrapper = styled.div`
    
    `

    return (
        <Link to={link}>
            <Wrapper>
                <Button>
                    {desc}
                </Button>
            </Wrapper>
        </Link>
    );
};

export default BasicButton;