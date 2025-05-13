import { Field, Formik } from 'formik';
function AppForm() {
    return (
        <Formik>
            {
                ({ isSubmitting }) => {
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
                                <Field type="textArea" name="message"></Field>
                            </div>


                        </form>
                    )

                }
            }
        </Formik>
    )

}

export default AppForm;