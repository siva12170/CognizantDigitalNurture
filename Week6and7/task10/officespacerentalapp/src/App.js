import React from 'react';
import OfficeSpaceDetails from './OfficeSpaceDetails'; 
import officeImage from './office_space.png'; 
function App() {
  const headingElement = "Office Space";

  const singleOffice = { Name: "DBS", Rent: 50000, Address: "Chennai" };

  const officeSpaces = [
    { Name: "Tech Hub", Rent: 75000, Address: "Bengaluru" },
    { Name: "Creative Loft", Rent: 45000, Address: "Mumbai" },
    { Name: "Innovation Center", Rent: 60000, Address: "Hyderabad" },
    { Name: "Corporate Tower", Rent: 85000, Address: "Delhi" },
    { Name: "Startup Garage", Rent: 30000, Address: "Pune" },
  ];

  return (
    <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif' }}>
      <h1>{headingElement}, at Affordable Range</h1>

      <img
        src={officeImage}
        alt="Office Space"
        style={{ width: '25%', height: 'auto', margin: '20px 0' }}
      />

      <div style={{ borderTop: '1px solid #ccc', paddingTop: '20px', marginTop: '20px' }}>
        <h2>Single Office Details:</h2>
        <OfficeSpaceDetails office={singleOffice} />
      </div>

      <div style={{ borderTop: '1px solid #ccc', paddingTop: '20px', marginTop: '20px' }}>
        <h2>More Office Spaces:</h2>
        {officeSpaces.map((office, index) => (
          <OfficeSpaceDetails key={index} office={office} />
        ))}
      </div>
    </div>
  );
}

export default App;