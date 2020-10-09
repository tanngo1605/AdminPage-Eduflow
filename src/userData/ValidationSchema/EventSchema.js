import * as yup from "yup";

const eventSchema = yup.object({
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
  description:yup.string()
    .required(),
  attachment: yup.array()
});

export default eventSchema;