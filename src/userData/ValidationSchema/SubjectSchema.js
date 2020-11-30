import * as yup from "yup";

const createSubjectSchema = yup.object().shape({
  classvalue: yup.string()
    .required("Please fill out this field"),
  section: yup.string()
    .required("Please fill out this field"),
  subject: yup.string()
    .required("Please fill out this field"),
  teacher: yup.string()
    .required("Please fill out this field"),

});

export default createSubjectSchema;