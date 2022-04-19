import React from "react";
import {Formik, Form, Field} from "formik";
import HeadingForm from "../component/HeadingForm";

export default function BlogForm() {
    return (
        <Formik
            initialValues={{
                title: 'Explore our products for your business solution from our blog',
                subtitle: 'our blog',
                posts: [],
                post_size: 3,
                show_arrows: true,
            }}
            onSubmit={(values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            })}
        >
            {props => (
                <Form onSubmit={props.handleSubmit}>
                    <HeadingForm formik={props}/>
                    <Field type={'number'} name={'post_size'} id={'post_size'}/>
                    <Field type={'checkbox'} name={'show_arrows'} id={'show_arrows'}/>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
