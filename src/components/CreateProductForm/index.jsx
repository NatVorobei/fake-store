import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addProductAsync } from "../../redux/actions/productsActions";
import styles from './CreateProductForm.module.scss';
import { validationSchemaProduct } from "../../validation";

export default function CreateProductForm({onFormSubmit}) {
    const dispatch = useDispatch();
    return(
        <Formik
            initialValues={{
                title: '',
                body: '',
                userId: 1,
            }}
            validationSchema={validationSchemaProduct}
            onSubmit={(values, { resetForm }) => {
                const newProduct = {
                    title: values.title,
                    body: values.description,
                    userId: values.userId,
                };
                dispatch(addProductAsync(newProduct));
                resetForm();
                if (onFormSubmit) {
                    onFormSubmit();
                }
            }}>
            {({ isSubmitting }) => (
                    <Form className={styles.form}>
                    <div className={styles.formGroup}>
                        <label htmlFor="title">Title:</label>
                        <Field
                            id="title"
                            name="title"
                            type="text"
                            className={styles.input}
                        />
                        <ErrorMessage name="title" component="div" className={styles.error} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="userId">UserId:</label>
                        <Field
                            id="userId"
                            name="userId"
                            type="text"
                            className={styles.input}
                        />
                        <ErrorMessage name="userId" component="div" className={styles.error} />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="body">Description:</label>
                        <Field
                            id="body"
                            name="body"
                            as="textarea"
                            className={styles.textarea}
                        />
                        <ErrorMessage name="body" component="div" className={styles.error} />
                    </div>
                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Create Product'}
                    </button>
                </Form>
                )}
        </Formik>
    )
}