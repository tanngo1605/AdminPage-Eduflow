import * as yup from "yup";

const initchangePasswordSchema =yup.object({
    oldpassword:yup.string()
        .required(),
    newpassword:yup.string()
        .required(),
    confirmnewpass:yup.string()
        .required()
})

const initresetPasswordSchema =yup.object({
    newpassword:yup.string()
        .required(),
    confirmnewpass:yup.string()
        .required()
})
const initforgotPasswordSchema =yup.object({
    schoolcode:yup.string()
        .required(),
    emailid:yup.string()
        .required(),
    confirmemailid:yup.string()
        .required()
})
export {initchangePasswordSchema,initresetPasswordSchema,initforgotPasswordSchema} ;