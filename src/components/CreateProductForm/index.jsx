import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addProductAsync } from "../../redux/actions/productsActions";
import styles from './CreateProductForm.module.scss';
import { validationSchemaProduct } from "../../validation";
import { v4 as uuidv4 } from 'uuid';

export default function CreateProductForm({onFormSubmit}) {
    const dispatch = useDispatch();

    return(
        <Formik
            initialValues={{
                title: '',
                price: '',
                description: '',
                published: false
            }}
            validationSchema={validationSchemaProduct}
            onSubmit={(values, { resetForm }) => {
                const newProduct = {
                    id: uuidv4(),
                    title: values.title,
                    price: parseFloat(values.price),
                    description: values.description,
                    published: values.published,
                    createdAt: new Date().toISOString()
                };
                dispatch(addProductAsync(newProduct));
                resetForm();
                if (onFormSubmit) {
                    onFormSubmit();
                }
            }}>
            {({ isSubmitting, setFieldValue, values }) => (
                <Form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Title:</label>
                        <Field
                            id="title"
                            name="title"
                            type="text"
                            className={styles.input} />
                        <ErrorMessage name="title" component="div" className={styles.error} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="price">Price:</label>
                        <Field
                            id="price"
                            name="price"
                            type="text"
                            className={styles.input} />
                        <ErrorMessage name="price" component="div" className={styles.error} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description:</label>
                        <Field
                            id="description"
                            name="description"
                            as="textarea"
                            className={styles.textarea} />
                        <ErrorMessage name="description" component="div" className={styles.error} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="published">Published:</label>
                        <Field
                            id="published"
                            name="published"
                            type="checkbox"
                            className={styles.checkbox}
                            checked={values.published}
                            onChange={() => setFieldValue("published", !values.published)}
                            />
                    </div>
                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Create Product'}
                    </button>
                </Form>
            )}
        </Formik>
    )
}