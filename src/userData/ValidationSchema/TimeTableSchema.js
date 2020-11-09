import * as Yup from "yup";

const TimetableSchema = Yup.object().shape({
    classvalue: Yup.string()
        .required("Please fill out this field"),
    section: Yup.string()
        .required("Please fill out this field"),
    day: Yup.date()
        .required("Please fill out this field"),
    period: Yup.array()
        .of(
            Yup.object().shape({
                starttime: Yup.string().required("Please fill out this field"),
                endtime: Yup.string().required("Please fill out this field"),
                subject: Yup.string().required("Please fill out this field"),
            })
        )
        .required()
});

export default TimetableSchema;