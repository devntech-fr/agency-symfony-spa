import React, {useEffect, useState} from "react";
import FullscreenModal from "../../../components/modal/FullscreenModal";
import {
    CButton,
    CCard, CCardBody,
    CCardHeader,
    CCol,
    CForm,
    CFormFeedback,
    CFormInput,
    CFormLabel,
    CFormSelect, CTable, CTableBody, CTableDataCell, CTableHead, CTableHeaderCell, CTableRow
} from "@coreui/react";
import {NavLink} from "react-router-dom";
import SFClient from "../../../../clients/sf_client";
import {useFormik} from "formik";

export default function CategoryList() {
    const [categories, setCategories] = useState(null);
    const client = new SFClient();
    const formik = useFormik({
        initialValues: {},
        onSubmit: async values => {
            console.log(JSON.stringify(values, null, 2));
            await client.post('/product_categories')
                .then(response => response.json())
                .then(json => console.log('json',json))
            ;
        }
    })
    useEffect(() => {
        async function getProductCategories() {
            await showProductCategories();
        }
        getProductCategories();
        () => {
            // close connexion
        }
    }, []);
    const showProductCategories = async () => {
        // const client = new SFClient();
        const categories = await client.get('/product_categories');
        console.log('categories',categories);
        setCategories(categories['hydra:member']);
    }
    return (
        <>
            <FullscreenModal title={`Ajouter une catégorie`}>
                <CForm
                    className="row g-3 needs-validation"
                    onSubmit={formik.handleSubmit}
                >
                    <CCol md={12}>
                        <CFormLabel htmlFor="name">Nom de la catégorie</CFormLabel>
                        <CFormInput type="text" id="name" defaultValue="Blockchain" onChange={formik.handleChange} required />
                        <CFormInput type="text" id="slug" value={"Blockchain"} onChange={formik.handleChange} disabled required />
                        <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol xs={12}>
                        <CButton color="primary" type="submit">
                            Valider
                        </CButton>
                    </CCol>
                </CForm>
            </FullscreenModal>
            {null !== categories && (
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>
                            {categories.length !== 0 && `Liste des catégories`}
                            {categories.length === 0 && `Vous n'avez pas de catégorie`}
                        </strong>
                    </CCardHeader>
                    <CCardBody>
                        <CTable responsive striped>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col" className="w-25">
                                        Nom
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col" className="w-25">
                                        Identifiant
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col" className="w-25">
                                        Produits
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col" className="w-25">
                                        Actions
                                    </CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {
                                    categories && categories.map((category, key) => (
                                        <CTableRow align={'middle'} key={key}>
                                            <CTableDataCell>
                                                {category.name}
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                {category.uid}
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                {category.products.length}
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <NavLink to={`/ecommerce/category/edit`}>
                                                    <CButton color={"primary"}>Modifier</CButton>
                                                </NavLink>
                                            </CTableDataCell>
                                        </CTableRow>
                                    ))
                                }
                            </CTableBody>
                        </CTable>
                    </CCardBody>
                </CCard>
            )}
        </>
    )
}
