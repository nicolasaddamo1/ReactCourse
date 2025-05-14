import { Field, Formik } from 'formik';
function AppForm() {
    return (
        <Formik
            initialValues={{ message: "Hola, te contacto por... " }}
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