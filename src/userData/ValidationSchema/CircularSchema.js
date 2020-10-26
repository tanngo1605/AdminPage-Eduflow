import * as yup from "yup";

const createCircularSchema = yup.object({
  title: yup.string()
    .required(),
  attachment:yup.array()
    .required(),
  
});
const listCircularSchema = yup.object({
  title: yup.string()
    .required(),
  date: yup.date()
    .required(),
  
});

export  {createCircularSchema,listCircularSchema};