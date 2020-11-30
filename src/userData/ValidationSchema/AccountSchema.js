import * as yup from "yup";

const accountSchema = yup.object().shape({
    schoolname: yup.string()
        .required("Please fill out this field"),
    schooladdress: yup.string()
        .required("Please fill out this field"),
    schoolcode: yup.string()
        .required("Please fill out this field"),
    city: yup.string()
        .required("Please fill out this field"),
    schoolbranch: yup.string()
        .required("Please fill out this field"),
    director: yup.string()
        .required("Please fill out this field"),
    principle: yup.string()
        .required("Please fill out this field"),
    viceprinciple: yup.string()
        .required("Please fill out this field"),
    admin: yup.string()
        .required("Please fill out this field"),
    image: yup.string()
        .required("Please fill out this field")

});

export default accountSchema;