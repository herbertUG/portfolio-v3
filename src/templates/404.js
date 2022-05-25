import React, { useState, useEffect } from 'react';
import { Link, graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { navDelay } from '@utils';
import { Layout } from '@components';

const StyledMainContainer = styled.main`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
`;
const StyledTitle = styled.h1`
  color: var(--green);
  font-family: var(--font-mono);
  font-size: clamp(100px, 25vw, 200px);
  line-height: 1;
`;
const StyledSubtitle = styled.h2`
  font-size: clamp(30px, 5vw, 50px);
  font-weight: 400;
`;
const StyledHomeButton = styled(Link)`
  ${({ theme }) => theme.mixins.bigButton};
  margin-top: 40px;
`;

const NotFoundPage = ({ location, data }) => {
  const [isMounted, setIsMounted] = useState(false);
  const { profile } = data.strapiPortfolio

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Layout location={location} profile={profile}>
      <Helmet title="Page Not Found" />

      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={500} classNames="fadeup">
            <StyledMainContainer className="fillHeight">
              <StyledTitle>404</StyledTitle>
              <StyledSubtitle>Page Not Found</StyledSubtitle>
              <StyledHomeButton to="/">Go Home</StyledHomeButton>
            </StyledMainContainer>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Layout>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export const query = graphql`
  query getPortfolioProfileByID($id: String) {
    strapiPortfolio(id: {eq: $id}) {
      id
      profile {
        contacts {
          app
          data
        }
        social_links {
          name
          url
        }
      }
    }
  }`;
export default NotFoundPage;
