import React from "react";
import {Formik, Form} from "formik";
import featuredImage from '../../../assets/images/react.jpg';
import CollectionField from "../component/CollectionField";

export default function SocialFeaturesForm() {
    const model = {
        uid: 1,
        title: 'Join the Community',
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.',
        image: featuredImage,
    };
    return (
        <Formik
            initialValues={{
                social_features: [],
            }}
            onSubmit={(values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            })}
        >
            {props => (
                <Form onSubmit={props.handleSubmit}>
                    <CollectionField formik={props} collection_name={'social_features'} model={model}/>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
