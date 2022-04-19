import React from "react";
import {Formik, Form} from "formik";
import featuredImage from '../../../assets/images/react.jpg';
import HeadingForm from "../component/HeadingForm";
import CollectionField from "../component/CollectionField";

export default function WorkflowForm() {
    const model = {
        uid: 1,
        title: 'Set disbursement Instructions',
        content: 'Get your performance tests delivered at home collect a sample from the your performance tests.',
        icon: featuredImage,
    };
    return (
        <Formik
            initialValues={{
                title: 'Let’s see how it works\n',
                subtitle: 'whats the function',
                work_steps: [],
            }}
            onSubmit={(values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            })}
        >
            {props => (
                <Form onSubmit={props.handleSubmit}>
                    <HeadingForm formik={props}/>
                    <CollectionField formik={props} collection_name={'work_steps'} model={model}/>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
