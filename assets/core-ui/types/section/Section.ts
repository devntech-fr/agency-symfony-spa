import {schemas, Schema} from "../../demo/Schema";
import Sections from "../../demo/sections";

export type Section = {
    uid: string;
    name: string;
    slug: string;
    image?: string;
}

export function getSections() {
    return Sections;
}

export function getSchema(uid: string): Schema {
    return schemas[uid];
}

export function getSectionFC(uid: string): Section {
    return Sections.filter((section) => {
        if (uid !== section.uid) {
            return;
        }
        return section;
    });
}

export function getFromSchema(schema) {
    const initialValues = prepareComponent(schema);
    const components = getComponents(schema.uid);
    console.log('getFromSchema',initialValues);
    return { name: schema.name, components: components, fields: initialValues.properties, values: initialValues.data };
}

export const getComponentsFields = (components) => {
    console.log('components',components);
    return components.map((component, key) => {
        console.log('getComponentsFields component:',component);
        if (true === component.collection) {
            return { meta: component.meta, fields: component.formFields };
        } else {
            return component.formField;
        }
    });
}

export const createSectionComponent = (section) => {
    console.log('createSectionComponent section', section);
    const currentSection = getSectionFC(section.uid)[0];// optionnel mais pratique
    const components = getComponents(section?.uid);
    console.log('createComponent currentSection',currentSection);
    const initialValues = prepareComponent(section);
    console.log('createComponent components',components);
    const fields = getComponentsFields(components);
    console.log('createComponent fields',fields);
    // createSection(section?.name, fields, initialValues);
    // setComponentForm(section.uid);
}

export const prepareComponent = (section) => {
    const meta_section = getPropertiesFrom(section);
    console.log('prepareComponent meta_section',meta_section);
    return getInitialValuesFrom(section, meta_section);
}

export function getPropertiesFrom(section) {
    let meta_section = {properties: [], data: []};
    Object.keys(section).forEach((prop, key) => {
        meta_section.properties[key] = prop;
    })
    return meta_section;
}

export function getInitialValuesFrom(section, meta_section) {
    Object.values(section).forEach((prop, key) => {
        meta_section.data[key] = prop;
    })
    return meta_section;
}

export function getComponents(section_uid: string) {
    return schemas[section_uid]?.components;
}
