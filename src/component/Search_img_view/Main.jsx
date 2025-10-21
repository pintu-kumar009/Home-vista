import React, { useState } from 'react';
import propertyData from './PropertyData';
import SearchForm from './SearchForm';
import PropertyList from './PropertyList';



function Main() {
  const [filteredProperties, setFilteredProperties] = useState(propertyData);

  const handleSearch = searchCriteria => {
    const filtered = propertyData.filter(property => {
      const locationMatch = property.location.toLowerCase().includes(searchCriteria.location);
      const stateMatch = property.state.toLowerCase().includes(searchCriteria.state);
      const areaMatch = parseFloat(property.area) >= searchCriteria.minArea;
      const priceMatch = parseFloat(property.price.slice(1).replace(',', '')) <= searchCriteria.maxPrice;

      return locationMatch && stateMatch && areaMatch && priceMatch;
    });

    setFilteredProperties(filtered);
  };

  return (
    <div>
      <SearchForm onSearch={handleSearch} />
      <PropertyList properties={filteredProperties} />
    </div>
  );
}

export default Main;
