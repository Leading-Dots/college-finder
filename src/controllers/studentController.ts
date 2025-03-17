import { Request, Response } from 'express';
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import awsmobile from "../amplifyconfiguration.json";
// import * as mutations from '../graphql/mutations';
import { createStudent, updateStudent, deleteStudent } from "../graphql/mutations";
import { getStudent, listStudents } from "../graphql/queries";
import { Status } from "../API";
import api from '@aws-amplify/api';
import express from 'express';

Amplify.configure(awsmobile);

const client = generateClient();

export const getOneStudent = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'id is required' });
    }
    
    const resultStudent = await client.graphql({
      query: getStudent,
      variables: {
        id: id,
      },
    });
    console.log(resultStudent);
    
    res.status(201).json({ message: 'Example created successfully', data: resultStudent });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export const getListStudent = async (req: Request, res: Response) => {
  try {
    const where = {};
    const { id, nextToken } = req.body;

    if (!id) {
      // return res.status(400).json({ message: 'id is required' });
    }

    let studentName = 'First Student';

    if (studentName) {
      where['studentName'] = { eq: [studentName] };
    }

    // Fetch the next 20 records
    
    const resultStudent = await client.graphql({
      query: listStudents,
      variables: {
        filter: {
          or: [where]
        },
        limit: 10,
        nextToken: nextToken,
      },
    });
    console.log(resultStudent);

    // const { items: itemsPage1, nextToken } = resultStudent.data.listStudents;
    
    res.status(201).json({ message: 'Example created successfully', data: resultStudent });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export const addStudent = async (req: Request, res: Response) => {
  try {
    const { studentName, collegeID } = req.body;

    if (!studentName || !collegeID) {
      return res.status(400).json({ message: 'Student Name and College ID are required' });
    }
    
    const resultStudent = await client.graphql({
      query: createStudent,
      variables: {
        input: {
          studentName: "Second Student",
          profileStatus: Status.ACCEPTED,
          collegeID: "e50f7ae5-aa87-4c0c-bd0a-cc46bb96fd9f",
        },
      },
    });
    console.log(resultStudent);
    
    res.status(201).json({ message: 'Example created successfully', data: resultStudent });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export const editStudent = async (req: Request, res: Response) => {
  try {
    const { id, studentId, studentName, collegeID } = req.body;

    if (!id || !studentId) {
      return res.status(400).json({ message: 'id and studentId are required' });
    }
    
    const resultStudent = await client.graphql({
      query: updateStudent,
      variables: {
        input: {
          id: id,
          studentId: studentId,
          studentName: "Second Student",
          profileStatus: Status.ACCEPTED,
          collegeID: "e50f7ae5-aa87-4c0c-bd0a-cc46bb96fd9f",
        },
      },
    });
    console.log(resultStudent);
    
    res.status(201).json({ message: 'Student updated successfully', data: resultStudent });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export const removeStudent = async (req: Request, res: Response) => {
  try {
    const { id, studentId } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'id is required' });
    }
    
    const resultStudent = await client.graphql({
      query: deleteStudent,
      variables: {
        input: {
          id: id
        },
      },
    });
    console.log(resultStudent);
    
    res.status(201).json({ message: 'Student Deleted successfully', data: resultStudent });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};