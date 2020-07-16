import React from 'react';
import styled from 'styled-components';

import McdonaldLogo from '../assets/mcdonald-logo.png';

import BasicButton from '../components/BasicButton';
import MenuBtnList from '../components/MenuBtnList';
import MenuElList from '../components/MenuElList';

const About = () => {
    return (
        <>
            <Wrapper>
                <Header>
                    <Logo src={McdonaldLogo} />
                    <Headertext>버거&세트</Headertext>
                    <BasicButton
                        desc="이전"
                        color="rgb(33, 94, 31)"
                        link="/"
                        RLpadding="4rem"
                        Mobilepadding="2rem" />
                </Header>

                <BodyWrapper>
                    <MenuBtnList />
                    <MenuElList />
                </BodyWrapper>
            </Wrapper>


            <Ordertop>
                <Text>주문 내역</Text>
            </Ordertop>
            <Empty>장바구니가 비어 있습니다</Empty>
            <OrderWrapper>
                <OrderBTN>
                    <BasicButton
                        desc="주문 취소"
                        color="#ff2b17"
                        link="/"
                        RLpadding="25.5rem"
                        Mobilepadding="3.7rem" />
                    <MarginMaker />
                    <BasicButton
                        desc="주문 완료"
                        color="#cfc9c8"
                        link="/about"
                        RLpadding="25.5rem"
                        Mobilepadding="3.7rem" />
                </OrderBTN>
            </OrderWrapper>
        </>
    );
};

const BodyWrapper = styled.div`
    display:flex;
        @media screen and (max-width: 800px) {
        transform: scale(0.97)
    }
`

const MarginMaker = styled.div`
    @media screen and (max-width: 800px) {
        width: 1rem;
        height: 1rem;
    }
`

const OrderWrapper = styled.div`
    text-align:center;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
    @media screen and (max-width: 800px) {
        margin-left: 1rem;
        margin-top: 1rem;
    }
`

const OrderBTN = styled.div`
    align-items: center;
    justify-content: center;
    width: auto;
    display:flex;
    bottom: 0;
    margin: 1rem;
`

const Wrapper = styled.div`
    display:inline-block;
    margin: 2rem;
    margin-right: 0;
    width:97%;
    @media screen and (max-width: 800px) {
        margin-top: 5rem;
    }
`

const Text = styled.span`
    font-weight:200;
    font-size:1.4rem;
    color: white;
    margin-left: 1.4rem;
    @media screen and (max-width: 800px) {
        font-size: 0.8rem;
    }
    `

const Headertext = styled.span`
    font-weight:200;
    font-size:60px;
    margin-right: 75rem;
    @media screen and (max-width: 800px) { 
        font-size: 30px;
        margin: 0 5.5rem 0 1rem;
   
    }
    `

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    @media screen and (max-width: 800px) {
        margin-bottom: 2rem;
    }
    `


const Logo = styled.img`
    width:12rem;
     @media screen and (max-width: 800px) { 
        width: 5rem;
        margin-left: -0.7rem;
    }
    `

const Ordertop = styled.div`
    width:100%;
    margin-top: 1rem;
    background-color: rgb(33,94,31);
    z-index:1;
    position: relative;
    padding: 0.4rem 0 0.4rem 0;
    
    @media screen and (max-width: 800px) {
        width: 105%;
        padding: 0 0 0.3rem 0;
    }
`

const Empty = styled.p`
    text-align: center;
    margin-top: 4rem;
    color: #aaaaaa;
    font-size: 1.6rem;

    @media screen and (max-width: 800px) {
            margin-top: 2rem;
            font-size: 0.7rem;
    }
`

export default About;