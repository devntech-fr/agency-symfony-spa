import React from "react";
import {Formik, Form} from "formik";
import featuredImage from '../../../assets/images/react.jpg';
import HeadingForm from "../component/HeadingForm";
import CollectionField from "../component/CollectionField";

export default function QualityFeaturesForm() {
    const model = {
        uid: 1,
        title: 'Pro Subscription',
        content: 'Get your performance tests delivered at home collect a sample from the your performance tests.',
        icon: featuredImage,
    };
    return (
        <Formik
            initialValues={{
                title: 'Amazing useful features',
                subtitle: 'quality features',
                quality_features: [],
            }}
            onSubmit={(values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            })}
        >
            {props => (
                <Form onSubmit={props.handleSubmit}>
                    <HeadingForm formik={props}/>
                    <CollectionField formik={props} collection_name={'quality_features'} model={model}/>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
