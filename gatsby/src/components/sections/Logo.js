import React from 'react' 
import styled from 'styled-components'

const Logo = () => {
    return(
        <ContenedorLogo>
            <img src='/logo.svg' alt='Logo MENDL' />
        </ContenedorLogo>
    )
}

const ContenedorLogo = styled.div`
    position: fixed;
    width: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
`

export default Logo