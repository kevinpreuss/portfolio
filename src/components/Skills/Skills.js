import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './SkillsStyles';

const data = [
  { text: 'HTML'},
  { text: 'CSS'},
  { text: 'JS'},
  { text: 'C#'},
  { text: 'PHP'},
  { text: 'MYSQL'},
  { text: 'GIT'},
  { text: 'UNITY'},
  { text: 'BLENDER'},
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