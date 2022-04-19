import React from "react";
import {useFormik} from "formik";
import CollectionField from "./component/CollectionField";
import getForm from "./SectionForms";

export function createForm(initialValues: object, fields: Array<any>) {
    const formik = useFormik({
            initialValues: initialValues,
            onSubmit: values => {
                console.log('submit form:',JSON.stringify(values, null, 2));
            }
        },
    );
    const showFields = () => {
        return fields.map((field, key) => {
            console.log('field',field);
            if (field.meta !== undefined) {
                return (
                    <CollectionField
                        collectionTitle={field.meta.collectionTitle}
                        collectionName={field.meta.collectionName}
                        initialValues={field.fields}
                    />
                )
            }
            if ('textarea' === field.type) {
                return (
                    <fieldset key={key}>
                        <label htmlFor={field.name}>{field.label}</label>
                        <textarea
                            name={field.name}
                            id={field.name}
                            cols={30}
                            rows={10}
                            defaultValue={field.value}
                            onChange={formik.handleChange}
                        ></textarea>
                    </fieldset>
                )
            }
            return (
                <fieldset key={key}>
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        onChange={formik.handleChange}
                        value={formik.values[field.name]}
                        defaultValue={field.value}
                    />
                </fieldset>
            )
        })
    }
    return (
        <>
            <form onSubmit={formik.handleSubmit}>
                Formulaire dynamique
                {showFields()}
                <button type="submit">Submit</button>
            </form>
        </>
    );
}

export function SectionForm({ uid, newSection }) {
    let FormSection = getForm(uid);
    console.log('FormSection',FormSection);
    return (
        <FormSection section={newSection}/>
    )
}

export type FormSection = {
    name: string;
    fields: string[];
    initialValues: {};
}

export type FieldCollection = {
    fields: SectionField[],
    meta: {
        collectionTitle: string;
        collectionName: string;
    }
}

export type SectionField = {
    label: string,
    name: string,
    value: string,
    type: string
}

