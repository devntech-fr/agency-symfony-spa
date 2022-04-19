import React from "react";
import {useFormik} from "formik";
import featuredImage from '../../../assets/images/react.jpg';

export default function HeroForm() {
    const formik = useFormik({
            initialValues: {
                title: 'Hero title',
                content: 'Hero lorem ipsum',
                button: {
                    label: 'Explore',
                    target: '_self',
                    url: '/#explore'
                },
                image: featuredImage
            },
            onSubmit: values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            }
        },
    );
    return (
        <form onSubmit={formik.handleSubmit}>
            Section hero
            <fieldset>
                <label htmlFor={'title'}>Titre</label>
                <input type="text" id={'title'} name={'title'} onChange={formik.handleChange} value={formik.values.title} placeholder={formik.initialValues.title}/>
            </fieldset>
            <fieldset>
                <label htmlFor={'content'}>Description</label>
                <textarea name="content" id="content" cols="30" rows="10" value={formik.values.content} onChange={formik.handleChange}></textarea>
            </fieldset>
            <fieldset>
                <label htmlFor={'button_label'}>Titre du bouton</label>
                <input type="text" id={'button_label'} name={'button_label'} onChange={formik.handleChange} value={formik.values.button.label} placeholder={formik.initialValues.button.label}/>
            </fieldset>
            <fieldset>
                <label htmlFor={'button_url'}>URL du bouton</label>
                <input type="text" id={'button_url'} name={'button_url'} onChange={formik.handleChange} value={formik.values.button.url} placeholder={formik.initialValues.button.url}/>
            </fieldset>
            <fieldset>
                <label htmlFor={'button_target'}>Cible du bouton</label>
                <select name="button_target" id="button_target" onChange={formik.handleChange} defaultValue={formik.values.button.target}>
                    <option value="_self">Onglet courant</option>
                    <option value="_blank">Nouvel onglet</option>
                </select>
            </fieldset>
            <fieldset>
                <label htmlFor={'image'}>Image</label>
                <input type="file" name={'image'} id={'image'} onChange={formik.handleChange} />
            </fieldset>
            <button type="submit">Submit</button>
        </form>
    )
}
