import React from 'react';
import styled from 'styled-components';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
const StyledMainContainer = styled.main`
  counter-reset: section;
`;
const ProfileTemplate = ({ pageContext, location }) => {
  const { data } = pageContext 
  return (
    <Layout location={location}>
      <StyledMainContainer className="fillHeight">
        <Hero data={data.attributes.profile}/>
        <About data={data.attributes.profile} />
        <Jobs data={data.attributes.career_path} />
        <Featured data={data.attributes.projects} />
        <Projects data={data.attributes.projects} />
        <Contact data={data.attributes.profile.contacts} />
      </StyledMainContainer>
    </Layout>
  );
};

export default ProfileTemplate;