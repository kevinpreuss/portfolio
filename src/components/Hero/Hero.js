import React from 'react';

import { ButtonBack, Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { NavLink } from '../Header/HeaderStyles';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Kevin Preuss
        </SectionTitle>
        <SectionText>
        Junior Web and Game Developer.
        </SectionText>  
      </LeftSection>
    </Section>
  </>
);

export default Hero;