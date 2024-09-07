import { ErrorMessage, Field, Form, Formik } from "formik";
import { updateProductAsync } from "../../redux/actions/productsActions";
import { useDispatch } from "react-redux";
import styles from './EditProductForm.module.scss';

export default function EditProductForm({product, onFormSubmit }) {
    const dispatch = useDispatch();

    return (
        <Formik
            initialValues={{
                title: product.title,
                price: product.price,
                description: product.description,
                published: product.published || false
            }}
            // validationSchema={validationSchemaProduct}
            onSubmit={(values, { resetForm }) => {
                const updatedProduct = {
                    id: product.id,
                    title: values.title,
                    price: parseFloat(values.price),
                    description: values.description,
                    published: values.published,
                };
                dispatch(updateProductAsync(updatedProduct));
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
                        <label htmlFor="price">Price:</label>
                        <Field
                            id="price"
                            name="price"
                            type="text"
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
                        {isSubmitting ? 'Submitting...' : 'Update Product'}
                    </button>
                </Form>
                )}
        </Formik>
    )
}