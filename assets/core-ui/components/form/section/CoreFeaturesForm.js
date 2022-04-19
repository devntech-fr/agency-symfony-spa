import React from "react";
import {Formik, Form} from "formik";
import featuredImage from '../../../assets/images/react.jpg';
import HeadingForm from "../component/HeadingForm";

export default function CoreFeaturesForm() {
    const model = {
        uid: 1,
        title: 'Smart Features',
        content: 'Get your performance tests delivered at home collect a sample from the your performance tests.',
        icon: featuredImage,
    };
    return (
        <Formik
            initialValues={{
                title: 'Smart Features that you may love anytime & anywhere',
                subtitle: 'core features',
                content: 'Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever.',
                featuredImage: featuredImage,
                shape: featuredImage,
                hasShape: false,
                button: {}
            }}
            onSubmit={(values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            })}
        >
            {props => (
                <Form onSubmit={props.handleSubmit}>
                    <HeadingForm formik={props}/>
                    <fieldset>
                        <label htmlFor="content">Contenu</label>
                        <textarea name="content" id="content" cols="30" rows="10" onChange={props.handleChange}></textarea>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="featuredImage">Image mise en avant</label>
                        <input type="file" name={'featuredImage'} id={'featuredImage'} onChange={props.handleChange}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="shape">Forme sous l'image</label>
                        <input type="file" name={'shape'} id={'shape'} onChange={props.handleChange}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="hasShape">Image mise en avant</label>
                        <input type="checkbox" name={'hasShape'} id={'hasShape'} onChange={props.handleChange}/>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="button">Bouton</label>
                        <input type="text" name={'button'} id={'button'} onChange={props.handleChange}/>
                    </fieldset>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
