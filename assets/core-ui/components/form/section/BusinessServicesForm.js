import React, {useEffect} from "react";
import {Formik, Form} from "formik";
import featuredImage from '../../../assets/images/react.jpg';
import HeadingForm from "../component/HeadingForm";
import CollectionField from "../component/CollectionField";

export default function BusinessServicesForm({ section }) {
    console.log('section model',section);
    const model = { name: section.name, components: section.components, data: {...section.values}, fields: {...section.fields} };
    console.log('model',model);
    const initValues = {};
    Object.values(model.fields).map((field, key) => {
        console.log('field',field,model.data[key]);
        initValues[field] = model.data[key];
    });
    console.log('initValues',initValues);
    const initialValues = {
        title: 'Meet the feature of product',
        subtitle: 'whats the function',
        business_services: [],
        image: featuredImage,
        shape: featuredImage,
        hasShape: false,
        videoSrc: ''
    };

    const displayFields = () => {
        model.components.map(({ label, name, value, type }, key) => {
            console.log('display components',label, name, value, type)
            // if ("object" === type) { return; }
            // if ("boolean" === type) {
            //     return (
            //         <input type="checkbox" name={field.toString()} id={field.toString()} defaultValue={initValues[field]} key={key}/>
            //     )
            // }
            // if ("number" === type) {
            //     return (
            //         <input type="number" name={field.toString()} id={field.toString()} defaultValue={initValues[field]} key={key}/>
            //     )
            // }
            // if ("string" === type) {
            //     return (
            //         <input type="text" name={field.toString()} id={field.toString()} defaultValue={initValues[field]} key={key}/>
            //     )
            // }
            // return (
            //     <label htmlFor="">Aucun type trouvé.</label>
            // )
            // console.log('value',typeof value);
        });
    }

    return (
        <Formik
            initialValues={initValues}
            onSubmit={(values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            })}
        >
            {props => (
                <Form onSubmit={props.handleSubmit}>
                    <HeadingForm formik={props}/>
                    {
                        model.components.map(({ name, type, formFields }, key) => {
                            console.log('display components', name, type);
                            if ("object" === type) { return; }
                            if ("boolean" === type) {
                                return (
                                    <fieldset>
                                        <label htmlFor={formFields.name}>{formFields.label}</label>
                                        <input type={"checkbox"} name={formFields.name} id={formFields.name} defaultValue={formFields.value} key={key}/>
                                    </fieldset>
                                )
                            }
                            if ("number" === type) {
                                return (
                                    <fieldset>
                                        <label htmlFor={formFields.name}>{formFields.label}</label>
                                        <input type={"number"} name={formFields.name} id={formFields.name} defaultValue={formFields.value} key={key}/>
                                    </fieldset>
                                )
                            }
                            if ("string" === type) {
                                return (
                                    <fieldset>
                                        <label htmlFor={formFields.name}>{formFields.label}</label>
                                        <input type={"text"} name={formFields.name} id={formFields.name} defaultValue={formFields.value} key={key}/>
                                    </fieldset>
                                )
                            }
                            return (
                                <label htmlFor="">Aucun type trouvé.</label>
                            )
                        })
                    }
                    {/*<CollectionField formik={props} collection_name={'business_services'} model={{*/}
                    {/*    title: "Service title",*/}
                    {/*    content: "Service content lorem ipsum",*/}
                    {/*    image: featuredImage*/}
                    {/*}}/>*/}
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
                        <label htmlFor="videoSrc">Source vidéo</label>
                        <input type="text" name={'videoSrc'} id={'videoSrc'} onChange={props.handleChange}/>
                    </fieldset>
                    <button type="submit">Submit</button>
                </Form>
            )}
        </Formik>
    )
}
