import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import sanityClient from '../../Client'
import HamburgerMenu from '../menu/menu.component'
import { Link } from 'react-router-dom'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
function urlFor(source) {
  return builder.image(source)
}

const HeaderContainer = styled.div`
  width: 100%;
  z-index: 10;
  top: 0;
  left: 0;
  position: absolute;
  height: 80px;
  display: grid;
  justify-items: center;
  align-items: center;

  grid-template-columns: 1fr 8fr 1fr;`

const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;`

const LogoLink = styled(Link)`
  width: 100%;
  height: 100%;`

const LogoImg = styled.img`
  min-width: 100px;
  max-width: 70%;
  height: auto;`

const Header = () => {
  const [header, setHeader] = useState({ 
    menu: [],
    logo: '',
    phone: '',
    email: ''
  })
  useEffect(() => {
    const headerQuery = `*[_type == "header"]`
    sanityClient.fetch(headerQuery).then(header => {

      header.forEach(header => {
        setHeader(header)
      })
    })
  }, [])
  return (

    <HeaderContainer >
       <HamburgerMenu menu={header.menu}/>
      <div></div>
      <LogoContainer>
          <LogoLink to='/'><LogoImg alt="Logo" src={urlFor(header.logo).width(500).url()}/></LogoLink>
      </LogoContainer>
    </HeaderContainer>
  )
}


export default Header
