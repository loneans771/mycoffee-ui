'use client'

// import React, { useState } from 'react';
// import Box from '@mui/material/Box';
// import { Stepper, Step, StepLabel, Button } from '@mui/material';


// const steps = [
//   'Plantation',
//   'Farmers',
//   'Harvest',
//   'Warehouse',
//   'Roaster',
//   'Coffee Shop',
// ];

// export default function Steppers() {
//     const [activeStep, setActiveStep] = useState(0);

//     const handleStepClick = (stepIndex) => {
//       setActiveStep(stepIndex);
//       // Add any additional logic you want to perform on step click
//     };
    
//   return (
//     <Box sx={{ width: '80%', alignContent: 'center', alignItems: 'center' }}>
//       <Stepper activeStep={activeStep} alternativeLabel>
//         {steps.map((label, index) => (
//           <Step key={label} onClick={() => handleStepClick(index)}>
//             <StepLabel>{label}</StepLabel>
//           </Step>
//         ))}
//       </Stepper>
//     </Box>
//   );
// }