import React from 'react';
import styled from 'styled-components';

const MenuElement = ({ img, name, price, kcal, icon }) => {
    const Wrapper = styled.button`
    width: 40rem;
    height: 26rem;
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
`

    const Elimg = styled.img`
    height: 19rem;
    margin-top: -5rem;
    z-index: 0;

`

    const Name = styled.p`
    font-size: 1.5rem;
    margin-top:0;
`

    const RightText = styled.div`
        font-size: 2rem;
        width:100%;
        text-align: right;
        position: relative;
    `

    const RightEl = styled.p`
        margin: 0.5rem; 
    `

    const Props = styled.span`
    font-weight: 1000;
    `

    return (
        <Wrapper>
            <RightText>
                <RightEl>₩ <Props>{price}</Props></RightEl>
                <RightEl>칼로리 <Props>{kcal}</Props></RightEl>
            </RightText>
            <Elimg src={img} />
            <Name>{name}</Name>
        </Wrapper>
    )
}
export default MenuElement;

