import * as Yup from 'yup';

export const validationSchemaProduct = Yup.object({
    title: Yup.string().required('Title is required'),
    price: Yup.number().required('Price is required').positive('Price must be a positive number'),
    description: Yup.string().required('Description is required'),
});