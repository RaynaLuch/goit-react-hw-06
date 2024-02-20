import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";

const userSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("This is a required field"),
  number: Yup.string()
    .min(3, "Too short")
    .max(50, "Too long")
    .required("This is a required field"),
});

export const ContactForm = ({ onAdd }) => {
  //   id = nanoid();
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);
    onAdd({ ...values });
    actions.resetForm();
  };
  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={userSchema}
    >
      <Form autoComplete="off" className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field type="text" name="name" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={phoneFieldId}>Number</label>
        <Field type="tel" name="number" id={phoneFieldId} />
        <ErrorMessage className={css.error} name="number" component="span" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};
