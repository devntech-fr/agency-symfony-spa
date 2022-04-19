import React from "react";
import {CButton} from "@coreui/react";

export default function CollectionFieldset({ formik, field }) {
    return (
        <fieldset>
            <label htmlFor={field.id}>{field.label}</label>
            <input
                type="text"
                name={`${field.id}.${key}`}
                id={`${field.id}.${key}`}
                onChange={formik.handleChange}
                placeholder={field.id}
            />
            <CButton
                type="button"
                variant={'outline'}
            >
                -
            </CButton>
            <CButton
                type="button"
                variant={'outline'}
            >
                +
            </CButton>
        </fieldset>
    )
}
