import React from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import PropertyData from './PropertyData';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PropertyDetailsContainer = styled.div`
  background-color: white;
  color: black;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${fadeIn} 0.5s ease-in;
`;


const PropertyImage = styled.img`
  width: 100%;
  max-height: 100vh;
  object-fit: cover;
  border-radius: 8px;
  margin: 20px auto;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  image-rendering: crisp-edges;
  transition: transform 0.3s ease-in-out;


 
`;

const Description = styled.p`
  text-align: center;
  margin-top: 20px;
`;

const PropertyDetailsPage = () => {
  const { id } = useParams(); 


  const property = PropertyData.find(property => property.id === parseInt(id));

  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <PropertyDetailsContainer>
   
      <h2>{property.location}</h2>
      <PropertyImage src={property.image} alt="Property" />
      <p>State: {property.state}</p>
      <p>Area: {property.area}</p>
      <p>Price: {property.price}</p>
      <Description>{property.description}</Description>
    </PropertyDetailsContainer>
  );
};

export default PropertyDetailsPage;
