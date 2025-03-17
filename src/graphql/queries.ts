/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getCourse = /* GraphQL */ `query GetCourse($id: ID!) {
  getCourse(id: $id) {
    id
    courseName
    studentID
    collegeID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetCourseQueryVariables, APITypes.GetCourseQuery>;
export const listCourses = /* GraphQL */ `query ListCourses(
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  listCourses(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      courseName
      studentID
      collegeID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCoursesQueryVariables,
  APITypes.ListCoursesQuery
>;
export const coursesByStudentID = /* GraphQL */ `query CoursesByStudentID(
  $studentID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  coursesByStudentID(
    studentID: $studentID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      courseName
      studentID
      collegeID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoursesByStudentIDQueryVariables,
  APITypes.CoursesByStudentIDQuery
>;
export const coursesByCollegeID = /* GraphQL */ `query CoursesByCollegeID(
  $collegeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelCourseFilterInput
  $limit: Int
  $nextToken: String
) {
  coursesByCollegeID(
    collegeID: $collegeID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      courseName
      studentID
      collegeID
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.CoursesByCollegeIDQueryVariables,
  APITypes.CoursesByCollegeIDQuery
>;
export const getCollege = /* GraphQL */ `query GetCollege($id: ID!) {
  getCollege(id: $id) {
    id
    collegeName
    Students {
      nextToken
      __typename
    }
    Courses {
      nextToken
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetCollegeQueryVariables,
  APITypes.GetCollegeQuery
>;
export const listColleges = /* GraphQL */ `query ListColleges(
  $filter: ModelCollegeFilterInput
  $limit: Int
  $nextToken: String
) {
  listColleges(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      collegeName
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListCollegesQueryVariables,
  APITypes.ListCollegesQuery
>;
export const getStudent = /* GraphQL */ `query GetStudent($id: ID!) {
  getStudent(id: $id) {
    id
    studentId
    studentName
    collegeID
    Courses {
      nextToken
      __typename
    }
    profileStatus
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetStudentQueryVariables,
  APITypes.GetStudentQuery
>;
export const listStudents = /* GraphQL */ `query ListStudents(
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  listStudents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      studentId
      studentName
      collegeID
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListStudentsQueryVariables,
  APITypes.ListStudentsQuery
>;
export const studentsByCollegeID = /* GraphQL */ `query StudentsByCollegeID(
  $collegeID: ID!
  $sortDirection: ModelSortDirection
  $filter: ModelStudentFilterInput
  $limit: Int
  $nextToken: String
) {
  studentsByCollegeID(
    collegeID: $collegeID
    sortDirection: $sortDirection
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      studentId
      studentName
      collegeID
      profileStatus
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.StudentsByCollegeIDQueryVariables,
  APITypes.StudentsByCollegeIDQuery
>;
