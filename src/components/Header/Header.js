import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href=".GlobalComponents__SectionTitle-sc-6qzy6y-1 iwASPi">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href=".GlobalComponents__SectionTitle-sc-6qzy6y-1 jdHOgU">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href=".GlobalComponents__SectionTitle-sc-6qzy6y-1 jdHOgU">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/oxygenta">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/genmashiro/">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
