import React from 'react'
import { useState } from 'react'
import { Container, Wrapper, Title, Desc, CardContainer, ToggleButtonGroup, ToggleButton, Divider } from './ProjectsStyle'
import ProjectCard from '../Cards/ProjectCards'
import { projects } from '../../data/constants'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('web app');
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects, Certifications & Leadership Experience</Title>
        <Desc>
          Here are some of my Projects, Certifications and Leadership experience.
        </Desc>
        <ToggleButtonGroup >
          {/* {toggle === 'all' ?
            <ToggleButton active value="all" onClick={() => setToggle('all')}>All</ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          <Divider /> */}
          {toggle === 'web app' ?
            <ToggleButton active value="web app" onClick={() => setToggle('web app')}>PROJECTS</ToggleButton>
            :
            <ToggleButton value="web app" onClick={() => setToggle('web app')}>PROJECTS</ToggleButton>
          }
          <Divider />
          {toggle === 'android app' ?
            <ToggleButton active value="android app" onClick={() => setToggle('android app')}>CERTIFICATIONS</ToggleButton>
            :
            <ToggleButton value="android app" onClick={() => setToggle('android app')}>CERTIFICATIONS</ToggleButton>
          }
          <Divider />
          {toggle === 'machine learning' ?
            <ToggleButton active value="machine learning" onClick={() => setToggle('machine learning')}>LEADERSHIP</ToggleButton>
            :
            <ToggleButton value="machine learning" onClick={() => setToggle('machine learning')}>LEADERSHIP</ToggleButton>
          }
        </ToggleButtonGroup>
        <CardContainer>
          {/* {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))} */}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard project={project} openModal={openModal} setOpenModal={setOpenModal}/>
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects