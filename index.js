'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
  const radius = parseFloat(req.params.r);

  if (isNaN(radius) || radius < 0) {
    return res.status(400).json({ error: 'Invalid radius' });
  }

  const area = (Math.PI * radius * radius).toFixed(2);
  const circumference = (2 * Math.PI * radius).toFixed(2);

  res.json({
    area: area,
    circumference: circumference
  });
});

//TODO2
app.get('/math/rectangle/:width/:height', (req, res) => {
  const width = parseFloat(req.params.width);
  const height = parseFloat(req.params.height);

  if (isNaN(width) || isNaN(height) || width < 0 || height < 0) {
    return res.status(400).json({ error: 'Invalid dimensions' });
  }

  const area = width * height;
  const perimeter = 2 * (width + height);

  res.json({
    area: area,
    perimeter: perimeter
  });
});

//TODO3
app.get('/math/power/:base/:exponent', (req, res) => {
  const base = parseFloat(req.params.base);
  const exponent = parseFloat(req.params.exponent);

  if (isNaN(base) || isNaN(exponent)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const result = Math.pow(base, exponent);

  if (req.query.root === 'true') {
    const root = Math.sqrt(base);
    return res.json({
      result: result,
      root: root
    });
  }

  res.json({
    result: result
  });
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});