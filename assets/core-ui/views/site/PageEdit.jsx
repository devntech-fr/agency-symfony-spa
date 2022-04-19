import React, { useState, useEffect } from 'react';
import {
    CCard,
    CCardBody,
    CRow,
    CCol,
    CContainer,
    CCardFooter, CButton,
} from '@coreui/react';
import {
    getSections,
    getSectionFC,
    getSchema,
    getFromSchema,
    getPropertiesFrom,
    getInitialValuesFrom,
    prepareComponent,
    getComponents
} from "../../types/section/Section";
import VerticallyCenteredModal from "../../components/modal/VerticallyCenteredModal";
import getForm from "../../components/form/SectionForms";
import {SectionForm} from "../../components/form/form";

function PageEdit() {
    const demoSectionCollection = getSections();
    const [selection, setSelection] = useState([]);
    const [section, setSection] = useState(null);
    const [newSection, setNewSection] = useState(null);
    const [formSection, setFormSection] = useState(null);

    useEffect(() => {
        console.log('selection deps effect !');
    }, [selection]);

    useEffect(() => {
        console.log('section deps effect !');
    }, [section]);

    useEffect(() => {
        console.log('newSection deps effect !');
    }, [newSection]);

    useEffect(() => {
        console.log('formSection deps effect !');
    }, [formSection]);

    const handleSelection = (section) => {
        console.log('handleSelection section',section);
        // add section to state
        addSectionToSelection(section);
        const schema = getSchema(section.uid);
        console.log('current schema',schema);
        // create section
        createSection(schema);
        // create form
        setComponentForm(section.uid);
        // createSectionComponent(section);
    }
    const addSectionToSelection = (section) => {
        setSelection(prevState => {
            return [ ...prevState, section ]
        });
        setSection(section);
    }
    const createSection = (schema) => {
        const { name, components, fields, values } = getFromSchema(schema);
        // console.log('createSection name',name);
        // console.log('createSection fields',fields);
        // console.log('createSection values',values);
        setNewSection({
            name,
            components,
            fields,
            values
        });
        console.log('section created');
    }
    const setComponentForm = (uid) => {
        const FormSection = getForm(uid);
        console.log('FormSection',FormSection);
        console.log('newSection',newSection);
        // setFormSection(FormSection);
        // if (!newSection) {
        //     return;
        // }
        return (<FormSection section={newSection}/>)
    }
    const handleSectionsReset = () => {
        setSelection([]);
    }

    const showSections = () => {
        // console.log('selection',selection);
        return selection.map((section, key) => {
            // console.log('section:',section);
            return (
                <div key={key}>
                    <img src={`${section.image}`} width={`100%`} alt={section.name} key={key} />
                </div>
            )
        });
    }
    const showDemo = () => {
        return demoSectionCollection.map((section, key) => {
            return (
                <CCard className="mb-4" key={key} onClick={() => handleSelection(section)}>
                    <CCardBody className='text-center'>
                        <img src={`${section.image}`} alt={section.name} title={section.name} width={`100%`} />
                    </CCardBody>
                    <CCardFooter>{section.name}</CCardFooter>
                </CCard>
            )
        });
    }
    return (
        <CContainer fluid>
            <CRow>
                <ComponentSidebar showImages={showDemo}/>
                <CCol md={12} lg={12} xl={12} xxl={12}>
                    <h1>Contenu de la page</h1>
                    <CCard className="mb-2">
                        <CCardBody className={'text-center'}>
                            <VerticallyCenteredModal title={`Ajouter une section`}>
                                {showDemo()}
                            </VerticallyCenteredModal>
                            <CButton color={`danger`} onClick={handleSectionsReset}>Réinitialiser</CButton>
                        </CCardBody>
                    </CCard>
                    {section && <p>Une section a été créée</p>}
                    {section && <SectionForm uid={section.uid} newSection={newSection}/>}
                    {/*{showSections()}*/}
                </CCol>
            </CRow>
        </CContainer>
    )
}

export default PageEdit
