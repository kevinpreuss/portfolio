import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Kevin Alexander Preuss
        </SectionTitle>
        <SectionText>
          <p>Junior Web and Game Developer.</p>
        </SectionText>
      </LeftSection>
    </Section>
  </>
);

export default Hero;