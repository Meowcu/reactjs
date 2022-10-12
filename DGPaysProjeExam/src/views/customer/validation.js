import * as Yup from 'yup';


export const addCategoryValidationSchema = Yup.object().shape({
    id: Yup.string().required('Please enter id.'),
    companyName: Yup
        .string().required("Please enter company name."),
    contactName: Yup
        .string().required("Please enter contact name."),
    contactTitle: Yup
        .string().required("Please enter contact title.")

})