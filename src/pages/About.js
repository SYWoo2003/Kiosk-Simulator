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
                    <Headertext>추천 메뉴</Headertext>
                    <BasicButton
                        desc="이전"
                        color="rgb(33, 94, 31)"
                        link="/"
                        RLpadding="4rem" />
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
                        RLpadding="25.5rem" />
                    <BasicButton
                        desc="주문 완료"
                        color="#cfc9c8"
                        link="/about"
                        RLpadding="25.5rem" />
                </OrderBTN>
            </OrderWrapper>
        </>
    );
};

const BodyWrapper = styled.div`
    display:flex;
`

const OrderWrapper = styled.div`
    text-align:center;
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
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
`

const Text = styled.span`
    font-weight:200;
    font-size:1.4rem;
    color: white;
    margin-left: 1.4rem;
    `

const Headertext = styled.span`
    font-weight:200;
    font-size:60px;
    margin-right: 75rem;
    `

const Header = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 3rem;
    `


const Logo = styled.img`
    width:12rem;
    height:10rem;
    `

const Ordertop = styled.div`
    width:100%;
    margin-top: 1rem;
    background-color: rgb(33,94,31);
    z-index:1;
    position: relative;
    padding: 0.4rem 0 0.4rem 0;
`

const Empty = styled.p`
text-align: center;
margin-top: 4rem;
color: #aaaaaa;
font-size: 1.6rem;
`

export default About;