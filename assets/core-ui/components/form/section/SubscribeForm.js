import React from "react";
import {Formik, Field} from "formik";

export default function SubscribeForm() {
    return (
        <Formik
            initialValues={{
                title: 'Subscribe to our Blog',
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor incididunt labore dolore.',
                form: {
                    placeholder: 'Enter your email address please',
                    button_label: 'Subscribe now !',
                    submit_url: '/#'
                },
                background_color: '#EA3A60',
            }}
            onSubmit={(values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            })}
        >
            {props => (
                <Form onSubmit={props.handleSubmit}>
                    <Field name={'title'}/>
                    <textarea name="content" id="content" cols="30" rows="10"></textarea>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
