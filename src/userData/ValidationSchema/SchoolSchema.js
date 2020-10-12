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


export  default schoolSchema;