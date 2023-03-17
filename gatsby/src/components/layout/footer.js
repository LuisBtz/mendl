import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return(
        <FooterContainer>
            <div className='container'>
                <img src='./delicatesen.svg' alt='delicatesen' />
                <a target='_blank' rel="noreferrer"   href='https://goo.gl/maps/dGRaPQc787Zo4JJG6'>
                    <img src='./direccion.svg' alt='Dirección' />
                </a>
            </div>
        </FooterContainer>
    )
}

const FooterContainer = styled.footer`
    .container {
        position: fixed;
        bottom: 50px;
        width: 240px;
        margin: 0 auto;
        left: 50%;
        transform: translateX(-50%);
        z-index: 15;
    }
`

export default Footer