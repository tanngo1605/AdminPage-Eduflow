import * as yup from "yup";

const teacherProfileSchema = yup.object({
  name: yup.string()
    .required(),
  dob: yup.date()
    .required(),
  gender: yup.string()
    .required(),
  permaaddress: yup.string()
    .required(),
  permacity: yup.string()
    .required(),
  permastate: yup.string()
    .required(),
  permapcode: yup.string()
    .required(),
  subject:yup.string()
    .required(),
  roleno:yup.string()
    .required(),
  phoneno:yup.string()
    .required(),
  alternatephoneno:yup.string()
    .required(),
});
const teacherSearchScema = yup.object({
    name: yup.string(),
    classvalue: yup.string(),
    section: yup.string(),
    subject:yup.string(),
    attachment:yup.array()
 

  });

export  {teacherProfileSchema,teacherSearchScema};