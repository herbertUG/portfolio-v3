import React from 'react';
import styled from 'styled-components';
import userDetails from '../../userDetails.json';

import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
const StyledMainContainer = styled.main`
  counter-reset: section;
`;
const ProfileTemplate = ({ location, data }) => {
  const { profile, career_path, projects } = userDetails
  return (
    <Layout location={location} profile={profile}>
      <StyledMainContainer className="fillHeight">
        <Hero data={profile}/>
        <About data={profile} />
        <Jobs data={career_path} />
        <Featured data={projects} />
        <Projects data={projects} />
        <Contact data={profile.contacts} />
      </StyledMainContainer>
    </Layout>
  );
};

export default ProfileTemplate;
