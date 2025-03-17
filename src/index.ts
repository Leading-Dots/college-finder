import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import awsmobile from "./amplifyconfiguration.json";
import { createStudent } from "./graphql/mutations";
import { Status } from "./API";
import api from '@aws-amplify/api';
import express from 'express';
import apiRoutes from './routes/apiRoutes';

const app = express();
const port = process.env.PORT || 3000;

Amplify.configure(awsmobile);

const client = generateClient();

// Middleware to parse JSON bodies
app.use(express.json());

// Use the example routes
app.use('/api', apiRoutes);

// Example of using Amplify API
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
