import React, {useEffect} from "react";
import {Field, FieldArray} from "formik";
import {CButton} from "@coreui/react";
import CollectionFieldset from "./CollectionFieldset";

export default function CollectionField({ formik, collection_name, model }) {
    const addItem = (arrayHelpers) => {
        let newItem = {...model.data};
        newItem.uid = formik.values[collection_name].length + 1;
        console.log('new item',newItem);
        arrayHelpers.push(newItem);
    }
    const insertItem = (arrayHelpers, key) => {
        let newItem = {...model.data};
        newItem.uid = key;
        arrayHelpers.insert(key, newItem);
    }
    const showFields = () => {
        console.log('model.meta',Object.keys(model?.meta));
        return Object.keys(model?.meta).map((attr, key) => {
            const field = {
                type: model.meta[attr].type,
                id: model.meta[attr].collection_name ? model.meta[attr].collection_name + '.' + key : model.meta[attr].id + '.' + key,
            }
            console.log('field',field);
            if ('collection' === model.meta[attr].type) {
                return (
                    <CollectionFieldset formik={formik} field={field} />
                )
            }
            if ('textarea' === model.meta[attr].type) {
                return (
                    <textarea name={field.id} id={field.id} cols="30" rows="10"></textarea>
                )
            }
            return (
                <fieldset key={key}>
                    <label htmlFor={field.id}>{field.label}</label>
                    <input
                        type={field.type}
                        name={`${field.id}.${key}`}
                        id={`${field.id}.${key}`}
                        onChange={formik.handleChange}
                        placeholder={field.id}
                    />
                </fieldset>
            )
        });
    }

    useEffect(() => {
        showFields();
    }, []);
    return (
        <>
            <FieldArray
                name={collection_name}
                render={arrayHelpers => (
                    <>
                        {showFields()}
                        {formik.values[collection_name] && formik.values[collection_name].length > 0 ? (
                            formik.values[collection_name].map((item, key) => {
                                // console.log('item',item);
                                return (
                                    <div key={key}>
                                        {/*<button type="button" onClick={() => addItem(arrayHelpers, model)}>*/}
                                        {/*    /!* show this when user has removed all friends from the list *!/*/}
                                        {/*    Add an item*/}
                                        {/*</button>*/}
                                        {/*<fieldset>*/}
                                        {/*    <label htmlFor={`${collection_name}.${key}_title`}>Titre</label>*/}
                                        {/*    <input*/}
                                        {/*        type="text"*/}
                                        {/*        name={`${collection_name}.${key}_title`}*/}
                                        {/*        id={`${collection_name}.${key}_title`}*/}
                                        {/*        onChange={formik.handleChange}*/}
                                        {/*        placeholder={model.title}*/}
                                        {/*    />*/}
                                        {/*    <label htmlFor={`${collection_name}.${key}_content`}>Description</label>*/}
                                        {/*    <input*/}
                                        {/*        type="text"*/}
                                        {/*        name={`${collection_name}.${key}_content`}*/}
                                        {/*        id={`${collection_name}.${key}_content`}*/}
                                        {/*        onChange={formik.handleChange}*/}
                                        {/*        placeholder={model.content}*/}
                                        {/*    />*/}
                                        {/*    <label htmlFor={`${collection_name}.${key}_image`}>Image</label>*/}
                                        {/*    <input*/}
                                        {/*        type="file"*/}
                                        {/*        name={`${collection_name}.${key}_icon`}*/}
                                        {/*        id={`${collection_name}.${key}_icon`}*/}
                                        {/*        onChange={formik.handleChange}*/}
                                        {/*    />*/}
                                        {/*</fieldset>*/}
                                        {/*<button*/}
                                        {/*    type="button"*/}
                                        {/*    onClick={() => arrayHelpers.remove(key)} // remove a friend from the list*/}
                                        {/*>*/}
                                        {/*    -*/}
                                        {/*</button>*/}
                                        {/*<button*/}
                                        {/*    type="button"*/}
                                        {/*    onClick={() => insertItem(arrayHelpers, key)} // insert an empty string at a position*/}
                                        {/*>*/}
                                        {/*    +*/}
                                        {/*</button>*/}
                                    </div>
                                )
                            })
                        ) : (
                            <>
                                Aucun élément enregistré.
                                <button type="button" onClick={() => addItem(arrayHelpers)}>
                                    {/* show this when user has removed all friends from the list */}
                                    Add an item
                                </button>
                            </>
                        )}
                    </>
                )}
            />
        </>
    )
}
