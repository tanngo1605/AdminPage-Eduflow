import * as yup from "yup";

const studentProfileSchema = yup.object({
  name: yup.string()
    .required(),
  dob: yup.date()
    .required(),
  admissnumber: yup.string()
    .required(),
  gender: yup.string()
    .required(),
  fathername: yup.string()
    .required(),
  mothername: yup.string()
    .required(),
  fatheroccupation: yup.string()
    .required(),
  motheroccupation: yup.string()
    .required(),
  permaaddress: yup.string()
    .required(),
  permacity: yup.string()
    .required(),
  permastate: yup.string()
    .required(),
  permapcode: yup.string()
    .required(),
  classvalue:yup.string()
    .required(),
  section:yup.string()
    .required(),
  teachername:yup.string()
    .required(),
  fathermobileno:yup.string()
    .required(),
  alternatephoneno:yup.string()
    .required(),
  image:yup.object(),
  
  
  
});
const studentSearchSchema = yup.object({
    name: yup.string(),
    classvalue: yup.string(),
    section: yup.string(),
    subject:yup.string(),
    attachment:yup.array()
 

  });

export  {studentProfileSchema,studentSearchSchema};