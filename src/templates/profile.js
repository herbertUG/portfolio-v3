import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import { Layout, Hero, About, Jobs, Featured, Projects, Contact } from '@components';
const StyledMainContainer = styled.main`
  counter-reset: section;
`;
const ProfileTemplate = ({ location, data }) => {
  const { profile, career_path, projects } = data.strapiPortfolio
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

export const query = graphql`
  query getPortfolioByID($id: String) {
    strapiPortfolio(id: {eq: $id}) {
      id
      profile {
        first_name
        last_name
        contacts {
          app
          data
        }
        social_links {
          name
          url
        }
        skills {
          internal {
            content
          }
        }
        birth
        avatar {
          url
        }
        header_line
        overview {
          data {
            overview
          }
        }
      }
      career_path {
        end
        company_url
        company_name
        is_present
        job_title
        start
        strapi_id
        overview {
          data {
            overview
          }
        }
      }
      projects {
        assets {
          url
        }
        company
        date
        overview
        project_name
        url
        is_featured
        stack {
          internal {
            content
          }
        }
      }
    }
  }`;

export default ProfileTemplate;
