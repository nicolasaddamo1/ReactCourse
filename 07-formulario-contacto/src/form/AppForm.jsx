import { Field, Formik } from 'formik';
function AppForm() {
    return (
        <Formik>
            {
                ({ isSubmitting }) => {
                    return (
                        <form>
                            <div>

                                <label htmlFor='name'></label>
                                <Field type="text" name="name"></Field>
                            </div>
                            <div>
                                <label htmlFor='email'></label>
                                <Field type="email" name="email"></Field>
                            </div>


                        </form>
                    )

                }
            }
        </Formik>
    )

}