import React from 'react';
import styled from 'styled-components';

import newicon from '../assets/icon_new.png';
import info from '../assets/info.png';

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
    @media screen and (max-width: 800px) {
            width: 9.5rem;
            height: 6.5rem;
            border-radius: 0.5rem;
    }
`

    const Elimg = styled.img`
    height: 19rem;
    margin-top: -5rem;
    z-index: 0;
    @media screen and (max-width: 800px) {
        height: 4.5rem;
        margin-top: -2.3rem;
    }

`

    const Name = styled.p`
    font-size: 1.5rem;
    margin-top:0;
    @media screen and (max-width: 800px) {
        font-size: 0.6rem;
        margin-top: -0.3rem;
    }
`

    const RightText = styled.div`
        font-size: 2rem;
        width:120%;
        text-align: right;
        position: relative;
        @media screen and (max-width: 800px) {
            font-size: 0.6rem;
            margin-top: -1rem;
        }
    `

    const RightEl = styled.p`
        margin: 0.5rem; 
        margin-right: 8rem;
        @media screen and (max-width: 800px) {
            margin-top: -0.5rem;
            margin-right: 1rem;
        }
    `

    const Props = styled.span`
    font-weight: 1000;
    `


    const Iconimg = styled.img`
        float: left;
        @media screen and (max-width: 800px) {
            margin-top: -1rem;
            width: 1rem;
            margin-left: 10px;
        }
    `


    const Info = styled.img`
        margin-left: 0.2rem;
        float: left;
        @media screen and (max-width: 800px) {
            margin-left: -0.8rem;
            margin-top: -1.1rem;
            width: 1.2rem;
        }
    `


    return (
        <Wrapper>
            <Info src={info} alt="" />
            {
                icon
                    ?

                    < Iconimg src={newicon} alt="" />
                    :
                    null
            }
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

