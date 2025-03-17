import { Request, Response } from 'express';
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import awsmobile from "../amplifyconfiguration.json";
// import * as mutations from '../graphql/mutations';
import { createCourse, updateCourse, deleteCourse } from "../graphql/mutations";
import { getCourse, listCourses } from "../graphql/queries";
import { Status } from "../API";
import api from '@aws-amplify/api';
import express from 'express';

Amplify.configure(awsmobile);

const client = generateClient();

export const getOneCourse = async (req: Request, res: Response) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'id is required' });
    }
    
    const resultCourse = await client.graphql({
      query: getCourse,
      variables: {
        id: id,
      },
    });
    console.log(resultCourse);
    
    res.status(201).json({ message: 'Example created successfully', data: resultCourse });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export const getListCourse = async (req: Request, res: Response) => {
  try {
    const { id, courseName, nextToken } = req.body;

    if (!id) {
      // return res.status(400).json({ message: 'id is required' });
    }

    // Fetch the next 20 records
    
    const resultCourse = await client.graphql({
      query: listCourses,
      variables: {
        // filter: {
        //   or: [{ courseName: { eq: courseName } }, { courseName: { eq: courseName } }]
        // },
        limit: 10,
        nextToken: nextToken,
      },
    });
    console.log(resultCourse);

    // const { items: itemsPage1, nextToken } = resultCourse.data.listCourses;
    
    res.status(201).json({ message: 'Example created successfully', data: resultCourse });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export const addCourse = async (req: Request, res: Response) => {
  try {
    const { courseName, collegeID } = req.body;

    if (!courseName || !collegeID) {
      return res.status(400).json({ message: 'Course Name and College ID are required' });
    }
    
    const resultCourse = await client.graphql({
      query: createCourse,
      variables: {
        input: {
          courseName: "Second Course",
          studentID: "e50f7ae5-aa87-4c0c-bd0a-cc46bb96fabc",
          collegeID: "e50f7ae5-aa87-4c0c-bd0a-cc46bb96fd9f",
        },
      },
    });
    console.log(resultCourse);
    
    res.status(201).json({ message: 'Example created successfully', data: resultCourse });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export const editCourse = async (req: Request, res: Response) => {
  try {
    const { id, courseId, courseName, collegeID } = req.body;

    if (!id || !courseId) {
      return res.status(400).json({ message: 'id and courseId are required' });
    }
    
    const resultCourse = await client.graphql({
      query: updateCourse,
      variables: {
        input: {
          id: id,
          courseName: "Second Course",
          studentID: "e50f7ae5-aa87-4c0c-bd0a-cc46bb96fabc",
          collegeID: "e50f7ae5-aa87-4c0c-bd0a-cc46bb96fd9f",
        },
      },
    });
    console.log(resultCourse);
    
    res.status(201).json({ message: 'Course updated successfully', data: resultCourse });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};

export const removeCourse = async (req: Request, res: Response) => {
  try {
    const { id, courseId } = req.body;

    if (!id) {
      return res.status(400).json({ message: 'id is required' });
    }
    
    const resultCourse = await client.graphql({
      query: deleteCourse,
      variables: {
        input: {
          id: id
        },
      },
    });
    console.log(resultCourse);
    
    res.status(201).json({ message: 'Course Deleted successfully', data: resultCourse });
  } catch (error) {
    res.status(500).json({ message: 'Something went wrong', error: error.message });
  }
};