import React from 'react'
import styled from "styled-components";

const Header = () => {
    return(
        <HeaderContainer>
            <ul>
                <li>
                    <a target='_blank' rel="noreferrer" href='https://goo.gl/maps/dGRaPQc787Zo4JJG6' >UBICACIÓN</a>
                </li>
                <li>
                    <a href='mailto:hola@mendl.mx'>CONTACTO</a>
                </li>
                <li>
                    <a target='_blank' rel="noreferrer" href='https://www.instagram.com/mendlmx/'>SÍGUENOS</a>
                </li>
            </ul>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    position: fixed;
    top: 50px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 15;
    @media (max-width: 550px) {
        top: 20px;
    }
    ul {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 20px;
        @media (max-width: 680px) {
            grid-gap: 10px;
        }
        @media (max-width: 550px) {
            grid-template-columns: repeat(3, 1fr);
        }
        li {
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 40px;
            width: 120px;
            text-align: center;
            a {
                display: block;
                line-height: 0;
                background-image: url('./button.png');
                background-size: 100%;
                background-position: center;
                background-repeat: no-repeat;
                padding: 20px;
            }
        }
    }
`

export default Header