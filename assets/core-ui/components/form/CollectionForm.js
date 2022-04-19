import React from "react";
import {Formik, Form, Field, FieldArray} from "formik";
import CollectionField from "./component/CollectionField";

export default function CollectionForm({ collection_title, initial_values, collection_name }) {
    return (
        <>
            <h1>{collection_title.toUpperCase()}</h1>
            <Formik
                initialValues={{ [collection_name]: initial_values }}
                onSubmit={ values => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                    }, 500)
                }}
                render={({ values }) => (
                    <Form>
                        <FieldArray
                            name={collection_name}
                            render={arrayHelpers => (
                                <>
                                    <CollectionField values={values} collection_name={collection_name} arrayHelpers={arrayHelpers}/>
                                    <div>
                                        <button type="submit">Submit</button>
                                    </div>
                                </>
                            )}
                        />
                    </Form>
                )}
            />
        </>
    )
}
