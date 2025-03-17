import { Request, Response } from 'express';
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import awsmobile from "../amplifyconfiguration.json";
// import * as mutations from '../graphql/mutations';
import { createCollege, updateCollege, deleteCollege } from "../graphql/mutations";
import { getCollege, listColleges } from "../graphql/queries";
import { Status } from "../API";
import api from '@aws-amplify/api';
import express from 'express';

Amplify.configure(awsmobile);

const client = generateClient();

export const getOneCollege = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'id is required' });
    }
    
    const resultCollege = await client.graphql({
      query: getCollege,
      variables: {
        id: id,
      },
    });
    console.log(resultCollege);
    
    res.status(201).json({ message: 'Example created successfully', data: resultCollege });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export const getListCollege = async (req: Request, res: Response) => {
  try {
    const { id, collegeName, nextToken } = req.body;

    if (!id) {
      // return res.status(400).json({ message: 'id is required' });
    }

    // Fetch the next 20 records
    
    const resultCollege = await client.graphql({
      query: listColleges,
      variables: {
        // filter: {
        //   or: [{ collegeName: { eq: collegeName } }, { collegeName: { eq: collegeName } }]
        // },
        limit: 10,
        nextToken: nextToken,
      },
    });
    console.log(resultCollege);

    // const { items: itemsPage1, nextToken } = resultCollege.data.listColleges;
    
    res.status(201).json({ message: 'Example created successfully', data: resultCollege });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export const addCollege = async (req: Request, res: Response) => {
  try {
    const { collegeName, collegeID } = req.body;

    if (!collegeName || !collegeID) {
      return res.status(400).json({ message: 'College Name and College ID are required' });
    }
    
    const resultCollege = await client.graphql({
      query: createCollege,
      variables: {
        input: {
          collegeName: "Second College"
        },
      },
    });
    console.log(resultCollege);
    
    res.status(201).json({ message: 'Example created successfully', data: resultCollege });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export const editCollege = async (req: Request, res: Response) => {
  try {
    const { id, collegeId, collegeName, collegeID } = req.body;

    if (!id || !collegeId) {
      return res.status(400).json({ message: 'id and collegeId are required' });
    }
    
    const resultCollege = await client.graphql({
      query: updateCollege,
      variables: {
        input: {
          id: id,
          collegeName: "Second College"
        },
      },
    });
    console.log(resultCollege);
    
    res.status(201).json({ message: 'College updated successfully', data: resultCollege });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export const removeCollege = async (req: Request, res: Response) => {
  try {
    const { id, collegeId } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'id is required' });
    }
    
    const resultCollege = await client.graphql({
      query: deleteCollege,
      variables: {
        input: {
          id: id
        },
      },
    });
    console.log(resultCollege);
    
    res.status(201).json({ message: 'College Deleted successfully', data: resultCollege });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};