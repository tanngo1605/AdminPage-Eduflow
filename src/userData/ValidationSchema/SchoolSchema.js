import * as yup from "yup";

const schoolSchema = yup.object({
  name: yup.string()
    .required(),
  schoolname: yup.string()
    .required(),
  schoolcode: yup.string()
    .required(),

  permaaddress: yup.string()
    .required(),
  permacity: yup.string()
    .required(),
  permastate: yup.string()
    .required(),
  permapcode: yup.string()
    .required(),

  schoolweb:yup.string()
    .required(),
  schoolemail:yup.string()
    .required(),
  contactnum:yup.string()
    .required(),
  alternatephoneno:yup.string()
    .required(),
});
const createSubjectSchema = yup.object({
  name: yup.string()
    .required(),
  description:yup.string()
  
});
const createClassSectionScema = yup.object({
  classvalue: yup.string()
      .required(),
  section: yup.string()
      .required(),
  roomno: yup.string(),
  teacher: yup.string()

});
export  {schoolSchema,createSubjectSchema,createClassSectionScema};