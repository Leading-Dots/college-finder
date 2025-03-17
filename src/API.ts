/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCourseInput = {
  id?: string | null,
  courseName?: string | null,
  studentID: string,
  collegeID: string,
};

export type ModelCourseConditionInput = {
  courseName?: ModelStringInput | null,
  studentID?: ModelIDInput | null,
  collegeID?: ModelIDInput | null,
  and?: Array< ModelCourseConditionInput | null > | null,
  or?: Array< ModelCourseConditionInput | null > | null,
  not?: ModelCourseConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Course = {
  __typename: "Course",
  id: string,
  courseName?: string | null,
  studentID: string,
  collegeID: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdateCourseInput = {
  id: string,
  courseName?: string | null,
  studentID?: string | null,
  collegeID?: string | null,
};

export type DeleteCourseInput = {
  id: string,
};

export type CreateCollegeInput = {
  id?: string | null,
  collegeName?: string | null,
};

export type ModelCollegeConditionInput = {
  collegeName?: ModelStringInput | null,
  and?: Array< ModelCollegeConditionInput | null > | null,
  or?: Array< ModelCollegeConditionInput | null > | null,
  not?: ModelCollegeConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type College = {
  __typename: "College",
  id: string,
  collegeName?: string | null,
  Students?: ModelStudentConnection | null,
  Courses?: ModelCourseConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelStudentConnection = {
  __typename: "ModelStudentConnection",
  items:  Array<Student | null >,
  nextToken?: string | null,
};

export type Student = {
  __typename: "Student",
  id: string,
  studentId?: string | null,
  studentName?: string | null,
  collegeID: string,
  Courses?: ModelCourseConnection | null,
  profileStatus?: Status | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelCourseConnection = {
  __typename: "ModelCourseConnection",
  items:  Array<Course | null >,
  nextToken?: string | null,
};

export enum Status {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}


export type UpdateCollegeInput = {
  id: string,
  collegeName?: string | null,
};

export type DeleteCollegeInput = {
  id: string,
};

export type CreateStudentInput = {
  id?: string | null,
  studentId?: string | null,
  studentName?: string | null,
  collegeID: string,
  profileStatus?: Status | null,
};

export type ModelStudentConditionInput = {
  studentId?: ModelStringInput | null,
  studentName?: ModelStringInput | null,
  collegeID?: ModelIDInput | null,
  profileStatus?: ModelStatusInput | null,
  and?: Array< ModelStudentConditionInput | null > | null,
  or?: Array< ModelStudentConditionInput | null > | null,
  not?: ModelStudentConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStatusInput = {
  eq?: Status | null,
  ne?: Status | null,
};

export type UpdateStudentInput = {
  id: string,
  studentId?: string | null,
  studentName?: string | null,
  collegeID?: string | null,
  profileStatus?: Status | null,
};

export type DeleteStudentInput = {
  id: string,
};

export type ModelCourseFilterInput = {
  id?: ModelIDInput | null,
  courseName?: ModelStringInput | null,
  studentID?: ModelIDInput | null,
  collegeID?: ModelIDInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCourseFilterInput | null > | null,
  or?: Array< ModelCourseFilterInput | null > | null,
  not?: ModelCourseFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelCollegeFilterInput = {
  id?: ModelIDInput | null,
  collegeName?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelCollegeFilterInput | null > | null,
  or?: Array< ModelCollegeFilterInput | null > | null,
  not?: ModelCollegeFilterInput | null,
};

export type ModelCollegeConnection = {
  __typename: "ModelCollegeConnection",
  items:  Array<College | null >,
  nextToken?: string | null,
};

export type ModelStudentFilterInput = {
  id?: ModelIDInput | null,
  studentId?: ModelStringInput | null,
  studentName?: ModelStringInput | null,
  collegeID?: ModelIDInput | null,
  profileStatus?: ModelStatusInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelStudentFilterInput | null > | null,
  or?: Array< ModelStudentFilterInput | null > | null,
  not?: ModelStudentFilterInput | null,
};

export type ModelSubscriptionCourseFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  courseName?: ModelSubscriptionStringInput | null,
  studentID?: ModelSubscriptionIDInput | null,
  collegeID?: ModelSubscriptionIDInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCourseFilterInput | null > | null,
  or?: Array< ModelSubscriptionCourseFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionCollegeFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  collegeName?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionCollegeFilterInput | null > | null,
  or?: Array< ModelSubscriptionCollegeFilterInput | null > | null,
};

export type ModelSubscriptionStudentFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  studentId?: ModelSubscriptionStringInput | null,
  studentName?: ModelSubscriptionStringInput | null,
  collegeID?: ModelSubscriptionIDInput | null,
  profileStatus?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionStudentFilterInput | null > | null,
  or?: Array< ModelSubscriptionStudentFilterInput | null > | null,
};

export type CreateCourseMutationVariables = {
  input: CreateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type CreateCourseMutation = {
  createCourse?:  {
    __typename: "Course",
    id: string,
    courseName?: string | null,
    studentID: string,
    collegeID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCourseMutationVariables = {
  input: UpdateCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type UpdateCourseMutation = {
  updateCourse?:  {
    __typename: "Course",
    id: string,
    courseName?: string | null,
    studentID: string,
    collegeID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCourseMutationVariables = {
  input: DeleteCourseInput,
  condition?: ModelCourseConditionInput | null,
};

export type DeleteCourseMutation = {
  deleteCourse?:  {
    __typename: "Course",
    id: string,
    courseName?: string | null,
    studentID: string,
    collegeID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateCollegeMutationVariables = {
  input: CreateCollegeInput,
  condition?: ModelCollegeConditionInput | null,
};

export type CreateCollegeMutation = {
  createCollege?:  {
    __typename: "College",
    id: string,
    collegeName?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCollegeMutationVariables = {
  input: UpdateCollegeInput,
  condition?: ModelCollegeConditionInput | null,
};

export type UpdateCollegeMutation = {
  updateCollege?:  {
    __typename: "College",
    id: string,
    collegeName?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCollegeMutationVariables = {
  input: DeleteCollegeInput,
  condition?: ModelCollegeConditionInput | null,
};

export type DeleteCollegeMutation = {
  deleteCollege?:  {
    __typename: "College",
    id: string,
    collegeName?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStudentMutationVariables = {
  input: CreateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type CreateStudentMutation = {
  createStudent?:  {
    __typename: "Student",
    id: string,
    studentId?: string | null,
    studentName?: string | null,
    collegeID: string,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStudentMutationVariables = {
  input: UpdateStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type UpdateStudentMutation = {
  updateStudent?:  {
    __typename: "Student",
    id: string,
    studentId?: string | null,
    studentName?: string | null,
    collegeID: string,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStudentMutationVariables = {
  input: DeleteStudentInput,
  condition?: ModelStudentConditionInput | null,
};

export type DeleteStudentMutation = {
  deleteStudent?:  {
    __typename: "Student",
    id: string,
    studentId?: string | null,
    studentName?: string | null,
    collegeID: string,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetCourseQueryVariables = {
  id: string,
};

export type GetCourseQuery = {
  getCourse?:  {
    __typename: "Course",
    id: string,
    courseName?: string | null,
    studentID: string,
    collegeID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCoursesQueryVariables = {
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoursesQuery = {
  listCourses?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      courseName?: string | null,
      studentID: string,
      collegeID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoursesByStudentIDQueryVariables = {
  studentID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoursesByStudentIDQuery = {
  coursesByStudentID?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      courseName?: string | null,
      studentID: string,
      collegeID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CoursesByCollegeIDQueryVariables = {
  collegeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelCourseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type CoursesByCollegeIDQuery = {
  coursesByCollegeID?:  {
    __typename: "ModelCourseConnection",
    items:  Array< {
      __typename: "Course",
      id: string,
      courseName?: string | null,
      studentID: string,
      collegeID: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetCollegeQueryVariables = {
  id: string,
};

export type GetCollegeQuery = {
  getCollege?:  {
    __typename: "College",
    id: string,
    collegeName?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListCollegesQueryVariables = {
  filter?: ModelCollegeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCollegesQuery = {
  listColleges?:  {
    __typename: "ModelCollegeConnection",
    items:  Array< {
      __typename: "College",
      id: string,
      collegeName?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStudentQueryVariables = {
  id: string,
};

export type GetStudentQuery = {
  getStudent?:  {
    __typename: "Student",
    id: string,
    studentId?: string | null,
    studentName?: string | null,
    collegeID: string,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStudentsQueryVariables = {
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStudentsQuery = {
  listStudents?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      studentId?: string | null,
      studentName?: string | null,
      collegeID: string,
      profileStatus?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type StudentsByCollegeIDQueryVariables = {
  collegeID: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelStudentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type StudentsByCollegeIDQuery = {
  studentsByCollegeID?:  {
    __typename: "ModelStudentConnection",
    items:  Array< {
      __typename: "Student",
      id: string,
      studentId?: string | null,
      studentName?: string | null,
      collegeID: string,
      profileStatus?: Status | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnCreateCourseSubscription = {
  onCreateCourse?:  {
    __typename: "Course",
    id: string,
    courseName?: string | null,
    studentID: string,
    collegeID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnUpdateCourseSubscription = {
  onUpdateCourse?:  {
    __typename: "Course",
    id: string,
    courseName?: string | null,
    studentID: string,
    collegeID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCourseSubscriptionVariables = {
  filter?: ModelSubscriptionCourseFilterInput | null,
};

export type OnDeleteCourseSubscription = {
  onDeleteCourse?:  {
    __typename: "Course",
    id: string,
    courseName?: string | null,
    studentID: string,
    collegeID: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateCollegeSubscriptionVariables = {
  filter?: ModelSubscriptionCollegeFilterInput | null,
};

export type OnCreateCollegeSubscription = {
  onCreateCollege?:  {
    __typename: "College",
    id: string,
    collegeName?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCollegeSubscriptionVariables = {
  filter?: ModelSubscriptionCollegeFilterInput | null,
};

export type OnUpdateCollegeSubscription = {
  onUpdateCollege?:  {
    __typename: "College",
    id: string,
    collegeName?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCollegeSubscriptionVariables = {
  filter?: ModelSubscriptionCollegeFilterInput | null,
};

export type OnDeleteCollegeSubscription = {
  onDeleteCollege?:  {
    __typename: "College",
    id: string,
    collegeName?: string | null,
    Students?:  {
      __typename: "ModelStudentConnection",
      nextToken?: string | null,
    } | null,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnCreateStudentSubscription = {
  onCreateStudent?:  {
    __typename: "Student",
    id: string,
    studentId?: string | null,
    studentName?: string | null,
    collegeID: string,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnUpdateStudentSubscription = {
  onUpdateStudent?:  {
    __typename: "Student",
    id: string,
    studentId?: string | null,
    studentName?: string | null,
    collegeID: string,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStudentSubscriptionVariables = {
  filter?: ModelSubscriptionStudentFilterInput | null,
};

export type OnDeleteStudentSubscription = {
  onDeleteStudent?:  {
    __typename: "Student",
    id: string,
    studentId?: string | null,
    studentName?: string | null,
    collegeID: string,
    Courses?:  {
      __typename: "ModelCourseConnection",
      nextToken?: string | null,
    } | null,
    profileStatus?: Status | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
