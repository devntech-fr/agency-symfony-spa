import React from "react";
import {Formik, Form} from "formik";
import HeadingForm from "../component/HeadingForm";

export default function PricingPlanForm() {
    const model = {
        uid: 1,
        title: 'Free plan',
        description: 'For small teams or office',
        features: [
            {
                name: 'Drag & Drop Builder',
                available: true,
            },
        ],
        pricing: 0,
        currency: '€',
        checkoutButton: {},
        trialButton: {},
        suggested: false,
    };
    return (
        <Formik
            initialValues={{
                title: 'Choose your pricing policy',
                subtitle: 'pricing plan',
                plan_policies: [
                    {
                        name: 'Monthly plan',
                        target: '#monthly'
                    },
                    {
                        name: 'Annuel plan',
                        target: '#annual'
                    }
                ],
                pricing_plans: [],
            }}
            onSubmit={(values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            })}
        >
            {props => (
                <Form onSubmit={props.handleSubmit}>
                    <HeadingForm formik={props}/>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
