import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; 


const Section = styled.div`
  margin: 0.6rem;

`;

const ResultsContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  color:black;
  border-radius: 2rem;
  justify-content: space-between;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const PropertyItem = styled.div`
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
  border-radius: 10px;
  background-color: white;
  color:black;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;
  cursor: pointer; /* Add cursor style to indicate it's clickable */

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const PropertyImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const PropertyDetailsContainer = styled.div`
  padding: 15px;
  color:black;
  text-decoration:none;
`;

const PropertyTitle = styled.h3`
  margin: 0;
  color:black;
  text-decoration:none;

`;

const NoPropertiesMessage = styled.p`
  text-align: center;
  font-size: 18px;
  
  margin: 50px auto;
  color:black;
  max-width: 100%;
`;


const PropertyList = ({ properties }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);

 

  return (
    <Section>
      <ResultsContainer>
        {properties.length === 0 ? (
          <NoPropertiesMessage>No property matches the criteria.</NoPropertiesMessage>
        ) : (
          properties.map(property => (
            <PropertyItem key={property.id}>
              <Link  style={{textDecoration:"none"}} to={`/property/${property.id}`}>
                <PropertyImage src={property.image} alt="Property" />
                <PropertyDetailsContainer>
                  <PropertyTitle>{property.location}</PropertyTitle>
                  <p>State: {property.state}</p>
                  <p>Area: {property.area}</p>
                  <p>Price: {property.price}</p>
                </PropertyDetailsContainer>
              </Link>
            </PropertyItem>
          ))
        )}
      </ResultsContainer>
     
    </Section>
  );
};

export default PropertyList;
