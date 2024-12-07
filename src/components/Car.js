import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams
import cars from '../cars.json';

// Import MUI components
import { Container, Paper, Chip } from '@mui/material';

const Car = () => {
  // Destructure the id from useParams
  // same as const id = useParams().id
  const { id } = useParams();

  // Find the specific car using the id
  const car = cars.find(car => car.id === parseInt(id));

  return (
    <Container>
      {car ? (
        <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
          <h1>{car.Name}</h1>
          <Chip label={`ID: ${car.id}`} style={{ margin: '5px' }} />
          <Chip label={`Miles_per_Gallon: ${car.Miles_per_Gallon || 'N/A'}`} style={{ margin: '5px' }} />
          <Chip label={`Cylinders: ${car.Cylinders}`} style={{ margin: '5px' }} />
          <Chip label={`Displacement: ${car.Displacement}`} style={{ margin: '5px' }} />
          <Chip label={`Horsepower: ${car.Horsepower}`} style={{ margin: '5px' }} />
          <Chip label={`Weight_in_lbs: ${car.Weight_in_lbs}`} style={{ margin: '5px' }} />
          <Chip label={`Acceleration: ${car.Acceleration}`} style={{ margin: '5px' }} />
          <Chip label={`Year: ${car.Year}`} style={{ margin: '5px' }} />
          <Chip label={`Origin: ${car.Origin}`} style={{ margin: '5px' }} />
        </Paper>
      ) : (
        <h2>Car not found</h2>
      )}
    </Container>
  );
};

export default Car;
