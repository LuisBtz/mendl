import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout/layout'
import { Seo } from '../components/layout/seo'
import Columns from '../components/sections/Columns'
import Logo from '../components/sections/Logo'

const IndexPage = () => {
  return(
    <Layout>
      <Contenedor>
        <div className='seo'>  
          <h1>Mendl restaurant</h1>
          <p>Deli Judio, platillos tipicos, bagels, salmon ahumado, vinos naturales, repostería, desayunos en Condesa Ciudad de México.</p>
        </div>
        <Logo />
        <Columns />
      </Contenedor>
    </Layout>
  )
}

const Contenedor = styled.section`
  position: relative;
  .seo {
    color: var(--white);
    z-index: 1;
  }
`

export const Head = () => (
  <Seo title='Mendl Delicatessen' description='deli judío clásico' image='/screenshot.png' />
  )


export default IndexPage