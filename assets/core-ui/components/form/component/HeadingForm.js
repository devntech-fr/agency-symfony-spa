import React from "react";

export default function HeadingForm({formik}) {
    return (
        <>
            Section heading
            <fieldset>
                <label htmlFor={'title'}>Titre</label>
                <input type="text" id={'title'} name={'title'} onChange={formik.handleChange} value={formik.values.title} placeholder={formik.initialValues.title}/>
            </fieldset>
            <fieldset>
                <label htmlFor={'subtitle'}>Sous-titre</label>
                <input type="text" id={'subtitle'} name={'subtitle'} onChange={formik.handleChange} value={formik.values.subtitle} placeholder={formik.initialValues.subtitle}/>
            </fieldset>
        </>
    )
}
