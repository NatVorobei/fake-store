import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addProductAsync } from "../../redux/actions/productsActions";
import styles from './CreateProductForm.module.scss';
import { validationSchemaProduct } from "../../validation";

export default function CreateProductForm() {
    const dispatch = useDispatch();
    return(
        <Formik
            initialValues={{
            title: '',
            price: 0,
            description: '',
        }}
        validationSchema={validationSchemaProduct}
        onSubmit={(values) => {
            const newProduct = {
                ...values,
                price: parseFloat(values.price),
                id: Date.now(),
            };

            dispatch(addProductAsync(newProduct));
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
                        <label htmlFor="price">Price:</label>
                        <Field
                            id="price"
                            name="price"
                            type="number"
                            className={styles.input}
                        />
                        <ErrorMessage name="price" component="div" className={styles.error} />
                    </div>

                    <div className={styles.formGroup}>
                        <label htmlFor="description">Description:</label>
                        <Field
                            id="description"
                            name="description"
                            as="textarea"
                            className={styles.textarea}
                        />
                        <ErrorMessage name="description" component="div" className={styles.error} />
                    </div>

                    <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Create Product'}
                    </button>
                </Form>
            )}
        </Formik>
    )
}