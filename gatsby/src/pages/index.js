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
        <Logo />
        <Columns />
      </Contenedor>
    </Layout>
  )
}

const Contenedor = styled.section`
  position: relative;
`

export const Head = () => (
  <Seo title='Mendl Project' description='Full website soon' image='/screenshot.png' />
  )


export default IndexPage