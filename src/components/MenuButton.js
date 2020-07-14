import React from 'react';
import styled from 'styled-components';

const MenuButton = ({ img, desc }) => {
    const Wrapper = styled.button`
    width: 11rem;
    height: 11.5rem;
    border-radius: 1rem;
    box-shadow: 3px solid #000000;
    padding:1rem;
    padding-top:1.5rem;
    border: none;
    cursor: pointer;
    background-color:white;
    border: 2px solid #efefef;
    transition: 0.5s;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    margin-left: 0.2rem;
    &:focus{
        outline: none;
    }
    &:hover{
        transform: scale(1.03);
    }
    @media screen and (max-width: 800px) {
            width: 4.5rem;
            height: 5.5rem;
            border-radius: 0.5rem;
            padding: 0;
            padding-bottom: 1rem;
    }
`

    const Elimg = styled.img`
    height: 6.5rem;
    margin-bottom: -1rem;
    @media screen and (max-width: 800px) {
        height: 2.6rem;
    }
`

    const Text = styled.p`
    font-size: 1.2rem;
    @media screen and (max-width: 800px) {
        font-size: 0.3rem;
        margin-top: 0.9rem;
    }
`

    return (
        <Wrapper>
            <Elimg src={img} />
            <Text>{desc}</Text>
        </Wrapper>
    )
}
export default MenuButton;

