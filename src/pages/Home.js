import React from 'react';
import styled from 'styled-components';
import { Helmet } from 'react-helmet';

import McdonaldLogo from '../assets/mcdonald-logo.png';
import InStore from '../assets/bigmac-set.png';
import Paperbag from '../assets/paperbag.png';

import PlaceButton from '../components/PlaceButton';


const Home = () => {

    const Wrapper = styled.div`
        text-align: center;
        margin-top: 3%;
            @media screen and (max-width: 800px) { 
            margin-top: 45%;
        }
    `

    const Logo = styled.img`
        width:12rem;
        @media screen and (max-width: 800px) { 
            width: 7rem;
        }
    `

    const Explain = styled.p`
        color: #ffffff;
        font-size: 2.1rem;
        margin-top: 1%;
        @media screen and (max-width: 800px) { 
            font-size: 1.5rem;
        }
    `

    return (
        <Wrapper>
            <Helmet>
                <style>{'body { background-color: rgb(33, 94, 31); }'}</style>
            </Helmet>
            <Logo src={McdonaldLogo} />
            <Explain>식사하실 장소를 선택해 주세요</Explain>
            <PlaceButton
                desc="매장에서 식사"
                img={InStore}
            />
            <PlaceButton
                desc="테이크아웃"
                img={Paperbag}
            />
        </Wrapper>

    );
};

export default Home;