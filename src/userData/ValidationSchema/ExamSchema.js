import * as yup from "yup";

const examSchema = yup.object({
  title: yup.string()
    .required(),
  classvalue: yup.string()
    .required(),
  section: yup.string()
    .required(),
  startTime: yup.string()
    .required(),
  endTime: yup.string()
    .required(),
  datefrom: yup.date()
    .required("required"),
  dateto: yup.date()
    .required(),
  attachment: yup.array()
});

export default examSchema;