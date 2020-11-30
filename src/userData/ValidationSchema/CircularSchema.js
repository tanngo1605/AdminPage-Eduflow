import * as yup from "yup";

const createCircularSchema = yup.object({
  title: yup.string()
    .required("Please fill out this field"),
  attachment: yup.array()
    .required("Please fill out this field"),

});
const listCircularSchema = yup.object({
  title: yup.string()
    .required("Please fill out this field"),
  date: yup.date()
    .required("Please fill out this field"),

});

export { createCircularSchema, listCircularSchema };