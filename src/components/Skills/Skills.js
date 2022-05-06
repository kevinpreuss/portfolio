import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxText } from './SkillsStyles';

const data = [
  { text: 'HTML5'},
  { text: 'CSS3'},
  { text: 'JS'},
  { text: 'C#'},
  { text: 'PHP'},
  { text: 'MYSQL'},
  { text: 'GIT'},
  { text: 'DOCKER'},
  { text: 'UNITY'},
  { text: 'BLENDER'},
  { text: 'LINUX'},
  { text: 'ADOBE'},
];

const Acomplishments = () => (
    <Section id="skills">
    <SectionTitle>Skills</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;