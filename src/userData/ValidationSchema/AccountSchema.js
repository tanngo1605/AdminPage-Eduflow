import * as yup from "yup";

const accountSchema = yup.object({
    schoolname: yup.string()
    .required(),
    schooladdress: yup.string()
    .required(),
    schoolcode: yup.string()
    .required(),
    city: yup.string()
    .required(),
    schoolbranch: yup.string()
    .required(),
    director: yup.string()
    .required(),
    principle: yup.string()
    .required(),
    viceprinciple:yup.string()
    .required(),
    admin:yup.string()
    .required(),
    image:yup.string()
    .required()
    
});

export default accountSchema;