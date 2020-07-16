import React from 'react';
import styled from 'styled-components';

import MenuEl from './MenuElement';
import menulist from '../data/Menulist.json';

const MenuElList = () => {

    const Wrapper = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        width: 80%;
        height: 25rem;
         overflow: auto;
         overflow-x: hidden;
        mask-image: linear-gradient(to bottom,  rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 1), rgba(0, 0, 0, 0));
        ::-webkit-scrollbar{
            display:none;
        }
        @media screen and (max-width: 800px) {
            width: 80%;
            margin: 0;
            margin-left: 0.1rem;
            height: 25rem;
        }
    `



    return (
        <Wrapper>
            {
                menulist.map(({ img, name, price, icon, kcal }, idx) => (
                    <MenuEl
                        key={`Menulist-${idx}`}
                        img={require(`../assets/Menuelementimg/${img}.png`)}
                        name={name}
                        price={price}
                        kcal={kcal}
                        icon={icon}
                    />
                ))
            }
        </Wrapper>
    )
}
export default MenuElList;