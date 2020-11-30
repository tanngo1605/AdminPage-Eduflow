import * as yup from "yup";

const studentProfileSchema = yup.object({
  name: yup.string()
    .required("Please fill out this field"),
  dob: yup.date()
    .required("Please fill out this field"),
  admissnumber: yup.string()
    .required("Please fill out this field"),
  gender: yup.string()
    .required("Please fill out this field"),
  fathername: yup.string()
    .required("Please fill out this field"),
  mothername: yup.string()
    .required("Please fill out this field"),
  fatheroccupation: yup.string()
    .required("Please fill out this field"),
  motheroccupation: yup.string()
    .required("Please fill out this field"),
  permaaddress: yup.string()
    .required("Please fill out this field"),
  permacity: yup.string()
    .required("Please fill out this field"),
  permastate: yup.string()
    .required("Please fill out this field"),
  permapcode: yup.string()
    .required("Please fill out this field"),
  classvalue: yup.string()
    .required("Please fill out this field"),
  section: yup.string()
    .required("Please fill out this field"),
  teachername: yup.string()
    .required("Please fill out this field"),
  fathermobileno: yup.string()
    .required("Please fill out this field"),
  alternatephoneno: yup.string()
    .required("Please fill out this field"),
  image: yup.object(),



});
const studentSearchSchema = yup.object({
  name: yup.string(),
  classvalue: yup.string(),
  section: yup.string(),
  subject: yup.string(),
  attachment: yup.array()


});

export { studentProfileSchema, studentSearchSchema };