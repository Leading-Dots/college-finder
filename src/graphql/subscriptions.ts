/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateCourse = /* GraphQL */ `subscription OnCreateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onCreateCourse(filter: $filter) {
    id
    courseName
    studentID
    collegeID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateCourseSubscriptionVariables,
  APITypes.OnCreateCourseSubscription
>;
export const onUpdateCourse = /* GraphQL */ `subscription OnUpdateCourse($filter: ModelSubscriptionCourseFilterInput) {
  onUpdateCourse(filter: $filter) {
    id
    courseName
    studentID
    collegeID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateCourseSubscriptionVariables,
  APITypes.OnUpdateCourseSubscription
>;
export const onDeleteCourse = /* GraphQL */ `subscription OnDeleteCourse($filter: ModelSubscriptionCourseFilterInput) {
  onDeleteCourse(filter: $filter) {
    id
    courseName
    studentID
    collegeID
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteCourseSubscriptionVariables,
  APITypes.OnDeleteCourseSubscription
>;
export const onCreateCollege = /* GraphQL */ `subscription OnCreateCollege($filter: ModelSubscriptionCollegeFilterInput) {
  onCreateCollege(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateCollegeSubscriptionVariables,
  APITypes.OnCreateCollegeSubscription
>;
export const onUpdateCollege = /* GraphQL */ `subscription OnUpdateCollege($filter: ModelSubscriptionCollegeFilterInput) {
  onUpdateCollege(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateCollegeSubscriptionVariables,
  APITypes.OnUpdateCollegeSubscription
>;
export const onDeleteCollege = /* GraphQL */ `subscription OnDeleteCollege($filter: ModelSubscriptionCollegeFilterInput) {
  onDeleteCollege(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteCollegeSubscriptionVariables,
  APITypes.OnDeleteCollegeSubscription
>;
export const onCreateStudent = /* GraphQL */ `subscription OnCreateStudent($filter: ModelSubscriptionStudentFilterInput) {
  onCreateStudent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateStudentSubscriptionVariables,
  APITypes.OnCreateStudentSubscription
>;
export const onUpdateStudent = /* GraphQL */ `subscription OnUpdateStudent($filter: ModelSubscriptionStudentFilterInput) {
  onUpdateStudent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateStudentSubscriptionVariables,
  APITypes.OnUpdateStudentSubscription
>;
export const onDeleteStudent = /* GraphQL */ `subscription OnDeleteStudent($filter: ModelSubscriptionStudentFilterInput) {
  onDeleteStudent(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteStudentSubscriptionVariables,
  APITypes.OnDeleteStudentSubscription
>;
