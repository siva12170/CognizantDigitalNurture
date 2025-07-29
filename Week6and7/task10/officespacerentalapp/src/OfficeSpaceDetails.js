import React from 'react';

function OfficeSpaceDetails({ office }) {
  const rentColor = office.Rent <= 60000 ? 'red' : 'green'; // [cite: 96]

  return (
    <div style={{ marginBottom: '20px' }}>
      <h3>Name: {office.Name}</h3>
      <h3 style={{ color: rentColor }}>Rent: Rs. {office.Rent}</h3> {/* [cite: 96] */}
      <h3>Address: {office.Address}</h3>
    </div>
  );
}

export default OfficeSpaceDetails;