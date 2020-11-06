import * as yup from "yup";

const createSubjectSchema = yup.object({
  title: yup.string()
    .required(),
  attachment:yup.array()
    .required(),
  
});

export default createSubjectSchema;