import { Field, Formik } from 'formik';
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
        >
            {
                ({ isSubmitting, values }) => {
                    return (
                        <form>
                            <div>

                                <label htmlFor='name'>Nombre:</label>
                                <Field type="text" name="name"></Field>
                            </div>
                            <div>
                                <label htmlFor='email'>Correo Electronico</label>
                                <Field type="email" name="email"></Field>
                            </div>
                            <div>
                                <label htmlFor='message'>Mensaje:</label>
                                <Field type="textArea" value={values.message} name="message"></Field>
                            </div>

                            <button>Enviar</button>
                        </form>
                    )

                }
            }
        </Formik>
    )

}

export default AppForm;