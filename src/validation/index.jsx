import * as Yup from 'yup';

export const validationSchemaProduct = Yup.object({
    title: Yup.string().required('Title is required'),
    price: Yup.number().required('Price is required').positive('Price must be positive'),
    body: Yup.string().required('Description is required'),
    published: Yup.boolean(),
});