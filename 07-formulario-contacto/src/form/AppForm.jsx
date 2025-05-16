import { ErrorMessage, Field, Formik } from 'formik';


function AppForm() {
    return (
        <Formik
            initialValues={{ message: "Hola, te contacto por... " }}
            validate={values => {
                const errors = {};
                if (!values.name) {
                    errors.name = 'Campo requerido';
                }
                if (!values.email) {
                    errors.email = 'Campo requerido';
                }
                else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                    errors.email = 'Email no valido';
                }
                return errors;
            }}
            onSubmit={
                (values, { setSubmitting }) => {
                    const url = import.meta.env.VITE_API_URL;
                    setTimeout(() => {
                        console.log("Datos enviados:", values);
                        setSubmitting(false);
                    }, 2000);
                    let formData = new FormData();
                    formData.append("name", values.name);
                    formData.append("email", values.email);
                    formData.append("message", values.message);

                    fetch(url, {
                        method: "POST",
                        body: formData,
                        headers: {
                            'Accept': 'application/json',
                        }
                    })
                }
            }
        >
            {
                ({ isSubmitting, values, handleSubmit }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div>

                                <label htmlFor='name'>Nombre:</label>
                                <Field type="text" name="name"></Field>
                                <ErrorMessage name="name" component="p" />
                            </div>
                            <div>
                                <label htmlFor='email'>Correo Electronico</label>
                                <Field type="email" name="email"></Field>
                                <ErrorMessage name="email" component="p" />
                            </div>
                            <div>
                                <label htmlFor='message'>Mensaje:</label>
                                <Field as="textarea" name="message"></Field>
                            </div>

                            <button type="submit" disabled={isSubmitting}>
                                {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                            </button>
                        </form>
                    )

                }
            }
        </Formik>
    )

}

export default AppForm;