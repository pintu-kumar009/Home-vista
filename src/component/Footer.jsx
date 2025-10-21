import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #f9f9f9;
  color: black;
  padding: 20px;
  display: flex;
  justify-content: space-evenly;


  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Section = styled.div`
  text-align: center;
  margin-bottom: 20px;
   
  h1 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    color:orange;
  }

  p {
    margin: 5px 0;
  }
`;

const Copyright = styled.div`
  text-align: center;
  clear:both;
`;

const Footer = () => {
  return (
    <div>
    
  
    <FooterContainer>
      

      <Section>
        <h1>Services</h1>
        <p>Buy a house</p>
        <p>Buy a flat</p>
        <p>Buy an area</p>
      </Section>



      <Section>
      <h1>Real State</h1>
      <p>Contact us: +91 9006342533</p>
      <p>Email us: realstate@gmail.com</p>
      <p>Help us</p>
    </Section>



      <Section>
        <h1>Support</h1>
        <p>FAQs</p>
        <p>Support center</p>
        <p>Help center</p>
      </Section>

    
    </FooterContainer>
    <Copyright><p> ©2023,Pintu kumar</p></Copyright>
    </div>
  );
};

export default Footer;
