import express from 'express';
import {
    addStudent,
    getOneStudent,
    getListStudent,
    editStudent,
    removeStudent
} from '../controllers/studentController';

import {
    addCourse,
    getOneCourse,
    getListCourse,
    editCourse,
    removeCourse
} from '../controllers/courseController';

import {
    addCollege,
    getOneCollege,
    getListCollege,
    editCollege,
    removeCollege
} from '../controllers/collegeController';

const router = express.Router();

// API /api/ Student
router.post('/student/add', addStudent);
router.get('/student/{id}', getOneStudent);
router.get('/student/list', getListStudent);
router.post('/student/edit/{id}', editStudent);
router.get('/student/{id}', removeStudent);

// API /api/ Course
router.post('/course/add', addCourse);
router.get('/course/{id}', getOneCourse);
router.get('/course/list', getListCourse);
router.post('/course/edit/{id}', editCourse);
router.get('/course/{id}', removeCourse);

// API /api/ College
router.post('/college/add', addCollege);
router.get('/college/{id}', getOneCollege);
router.get('/college/list', getListCourse);
router.post('/college/edit/{id}', editCollege);
router.get('/college/{id}', removeCollege);

export default router;