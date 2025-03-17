import express from 'express';
import { Amplify } from 'aws-amplify';
import api from '@aws-amplify/api';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});