/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createCourse = /* GraphQL */ `mutation CreateCourse(
  $input: CreateCourseInput!
  $condition: ModelCourseConditionInput
) {
  createCourse(input: $input, condition: $condition) {
    id
    courseName
    studentID
    collegeID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateCourseMutationVariables,
  APITypes.CreateCourseMutation
>;
export const updateCourse = /* GraphQL */ `mutation UpdateCourse(
  $input: UpdateCourseInput!
  $condition: ModelCourseConditionInput
) {
  updateCourse(input: $input, condition: $condition) {
    id
    courseName
    studentID
    collegeID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateCourseMutationVariables,
  APITypes.UpdateCourseMutation
>;
export const deleteCourse = /* GraphQL */ `mutation DeleteCourse(
  $input: DeleteCourseInput!
  $condition: ModelCourseConditionInput
) {
  deleteCourse(input: $input, condition: $condition) {
    id
    courseName
    studentID
    collegeID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteCourseMutationVariables,
  APITypes.DeleteCourseMutation
>;
export const createCollege = /* GraphQL */ `mutation CreateCollege(
  $input: CreateCollegeInput!
  $condition: ModelCollegeConditionInput
) {
  createCollege(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateCollegeMutationVariables,
  APITypes.CreateCollegeMutation
>;
export const updateCollege = /* GraphQL */ `mutation UpdateCollege(
  $input: UpdateCollegeInput!
  $condition: ModelCollegeConditionInput
) {
  updateCollege(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateCollegeMutationVariables,
  APITypes.UpdateCollegeMutation
>;
export const deleteCollege = /* GraphQL */ `mutation DeleteCollege(
  $input: DeleteCollegeInput!
  $condition: ModelCollegeConditionInput
) {
  deleteCollege(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteCollegeMutationVariables,
  APITypes.DeleteCollegeMutation
>;
export const createStudent = /* GraphQL */ `mutation CreateStudent(
  $input: CreateStudentInput!
  $condition: ModelStudentConditionInput
) {
  createStudent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateStudentMutationVariables,
  APITypes.CreateStudentMutation
>;
export const updateStudent = /* GraphQL */ `mutation UpdateStudent(
  $input: UpdateStudentInput!
  $condition: ModelStudentConditionInput
) {
  updateStudent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateStudentMutationVariables,
  APITypes.UpdateStudentMutation
>;
export const deleteStudent = /* GraphQL */ `mutation DeleteStudent(
  $input: DeleteStudentInput!
  $condition: ModelStudentConditionInput
) {
  deleteStudent(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteStudentMutationVariables,
  APITypes.DeleteStudentMutation
>;
