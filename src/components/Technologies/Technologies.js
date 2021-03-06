import React from 'react';
import { DiFirebase, DiReact, DiUnitySmall, DiCode, DiLinux, DiPhotoshop } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a far range of technologies in the web and game development world.
      From Back-end To Design and Animation.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <DiReact size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            HTML, JS and CSS
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiFirebase size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            PHP and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiUnitySmall size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Unity</ListTitle>
          <ListParagraph>
            Experience with <br />
            tools like Unity
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiCode size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>MonoGame</ListTitle>
          <ListParagraph>
            Experience with <br />
            C# and MGCB Editor
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiLinux size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Linux</ListTitle>
          <ListParagraph>
            Experience with <br />
            Debian and Arch
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <DiPhotoshop size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Adobe</ListTitle>
          <ListParagraph>
            Experience with <br />
            Photoshop, Premiere Pro and After Effects
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
