import React from "react";
import {Formik, Form} from "formik";
import featuredImage from '../../../assets/images/react.jpg';
import HeadingForm from "../component/HeadingForm";
import CollectionField from "../component/CollectionField";

export default function TeamForm() {
    const model = {
        uid: 1,
        name: 'Saimon Harmer',
        job: 'CEO & Founder',
        image: featuredImage,
    };
    return (
        <Formik
            initialValues={{
                title: 'The most qualified and talented individuals',
                subtitle: 'our team',
                members: [],
            }}
            onSubmit={(values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            })}
        >
            {props => (
                <Form onSubmit={props.handleSubmit}>
                    <HeadingForm formik={props}/>
                    <CollectionField formik={props} collection_name={'members'} model={model}/>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
