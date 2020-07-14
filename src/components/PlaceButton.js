import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PlaceButton = ({ img, desc }) => {

    const Button = styled.button`
        width: 23%;
        margin: 1%;
        padding:3% 1% 2% 1%;
        border-radius: 15px;
        background-color: #ffffff;
        text-align: center;
        color: #D20000;
        font-size: 1.8rem;
        font-weight: 600;
        border: 0;
        cursor: pointer;
        transition: 0.4s;
         &:focus{
             outline: none;
         }
         &:hover{
             transform: scale(1.03);
         }

         @media screen and (max-width: 800px) { 
            width: 40%;
            margin: 3%;
            font-size: 1.2rem;
            padding-bottom: 1rem;
        }
        `

    const Image = styled.img`
        width:100%;
        -webkit-user-drag:none;
    `

    return (
        <Link to="/about">
            <Button>
                <Image src={img} />
                {desc}

            </Button>
        </Link>
    );
};

export default PlaceButton;