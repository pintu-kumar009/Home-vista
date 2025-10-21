import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react'; 
import Header from '../Header/Header';
import Main from './Main';


const fadeInAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MainContainer = styled.div`
  background-image: url(https://image-cdn.carrot.com/uploads/sites/12149/2012/01/houston-house-2-hero.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 50vh;
  padding: 10px;
  margin: 1rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: aqua;
  
  // Apply animation to the container
  animation: ${fadeInAnimation} 1s ease-in-out;
`;

const Heading = styled.p`
  font-size: 3rem;
  font-weight: bold;
  margin: -7px;
  color: aqua; // Change to your desired color
`;

const Subheading = styled.p`
  font-size: 2rem;
  margin: 10px 0;
  color: yellow; // Change to your desired color
`;

const Backgroundfile = () => {
  return (
    <>
      <MainContainer>
        <div>
          <Heading>Let's Find a Home</Heading>
          <Subheading>That's Perfect for You</Subheading>
        </div>
      </MainContainer>

      <Main />
    </>
  );
};

export default Backgroundfile;
