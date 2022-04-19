import React from "react";
import {Formik, Form} from "formik";
import featuredImage from '../../../assets/images/react.jpg';
import HeadingForm from "../component/HeadingForm";
import CollectionField from "../component/CollectionField";

export default function KeyFeaturesForm() {
    const model = {
        uid: 1,
        title: 'Fast Performance',
        content: 'Get your performance tests delivered at home collect a sample from the your performance tests.',
        icon: featuredImage,
    };
    return (
        <Formik
            initialValues={{
                title: 'Meet the feature of product',
                subtitle: 'whats the function',
                key_features: [],
            }}
            onSubmit={(values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            })}
        >
            {props => (
                <Form onSubmit={props.handleSubmit}>
                    <HeadingForm formik={props}/>
                    <CollectionField formik={props} collection_name={'key_features'} model={model}/>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
