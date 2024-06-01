// PieChart.jsx
import React, { useState, useEffect } from 'react';
import { PieChart as MinimalPieChart } from 'react-minimal-pie-chart';

function PieChart({ data, colors, hole, radius }) {
  // Component logic goes here...

  return (
    <div>
      {/* Render your pie chart here */}
      <MinimalPieChart
        data={data}
        radius={radius}
        lineWidth={20} // Adjust this value for the thickness of the pie chart segments
        paddingAngle={5} // Adjust the spacing between segments
        segmentsStyle={{ transition: 'stroke .3s' }} // Add a transition effect
        animate // Enable animation
      />
    </div>
  );
}

export default PieChart;
