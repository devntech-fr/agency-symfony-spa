import React from "react";
import {Formik, Form} from "formik";
import featuredImage from '../../../assets/images/react.jpg';
import HeadingForm from "../component/HeadingForm";
import CollectionField from "../component/CollectionField";

export default function TestimonialsForm() {
    const model = {
        uid: 1,
        summary: 'Great product !',
        comment: 'Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.\n',
        avatar: featuredImage,
        author: {
            name: 'Denny Hilguston',
            socialPseudo: '@denny.hil'
        },
        stars: 5
    };
    return (
        <Formik
            initialValues={{
                title: 'Meet client satisfaction',
                subtitle: 'happy customers',
                testimonials: [],
                showArrows: true,
            }}
            onSubmit={(values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            })}
        >
            {props => (
                <Form onSubmit={props.handleSubmit}>
                    <HeadingForm formik={props}/>
                    <CollectionField formik={props} collection_name={'testimonials'} model={model}/>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
