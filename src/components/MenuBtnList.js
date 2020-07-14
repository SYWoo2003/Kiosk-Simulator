import React from 'react';
import styled from 'styled-components';

import MenuButton from './MenuButton';
import menubtndata from '../data/Menubtndata.json';

const MenuBtnList = () => {

    const Wrapper = styled.div`
        display: flex;
        flex-direction: column;
        height: 25rem;
        width: 11.5rem;   
        
        overflow: auto;
        mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
        ::-webkit-scrollbar{
            display:none;
        }

        @media screen and (max-width: 800px) {
            width: 5rem;
            margin-left: -1.2rem;
            mask-image: none;
        }
    `



    return (
        <Wrapper>
            {
                menubtndata.map(({ img, desc }, idx) => (
                    <MenuButton
                        key={`Menubtndata-${idx}`}
                        img={require(`../assets/Menubuttonimg/${img}.png`)}
                        desc={desc}
                    />
                ))
            }
        </Wrapper>
    )
}
export default MenuBtnList;