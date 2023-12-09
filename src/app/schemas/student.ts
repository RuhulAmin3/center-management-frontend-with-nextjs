import * as yup from "yup";
import { GenderEnum } from "../constants/enums";
import { bloodGroup as bloodGroupEnum } from "../constants";

export const studentSchema = yup.object().shape({
  //   password: yup.string().min(6).max(32).required("password is required"),
  student: yup.object().shape({
    name: yup.object().shape({
      firstName: yup.string().required("First name is required"),
      middleName: yup.string(),
      lastName: yup.string().required("Last name is required"),
    }),
    admissionYear: yup.string().required("admission year is required"),
    dateOfBirth: yup.string().required("Date of Birth year is required"),
    gender: yup.mixed().oneOf([GenderEnum]).required("gender is required"),
    email: yup.string().email("Provide valid email").optional(),
    contactNo: yup.string().required("contact no is required"),
    emergencyContactNo: yup.string().optional(),
    bloodGroup: yup
      .mixed()
      .oneOf(bloodGroupEnum.map((group) => group.value))
      .required("blood group is required"),
    guardian: yup.object().shape({
      fatherName: yup.string().required("father name is required"),
      fatherOccupation: yup.string().required("father occupation is required"),
      fatherContactNo: yup.string().required("father contact no is required"),
      motherName: yup.string().required("mother name is required"),
      motherOccupation: yup.string().required("mother occupation is required"),
      motherContactNo: yup.string().required("mother contact no is required"),
    }),
    className: yup.string().required("class name is required"),
    classRoll: yup.string().required("class roll is required"),
    section: yup.string().required("section is required"),
    schoolName: yup.string().required("school name is required"),
    presentAddress: yup.string().required("present address is required"),
    permanentAddress: yup.string().optional(),
    shortDescription: yup.string().optional(),
  }),
});
