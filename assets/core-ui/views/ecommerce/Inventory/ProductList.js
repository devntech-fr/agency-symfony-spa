import React, {useState, useEffect} from "react";
import {
    CCard,
    CCardBody,
    CCardHeader, CCol,
    CTable,
    CTableBody, CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CButton, CForm, CFormLabel, CFormInput, CFormFeedback, CFormSelect, CFormCheck, CRow
} from "@coreui/react";
import {NavLink} from "react-router-dom";
import FullscreenModal from "../../../components/modal/FullscreenModal";
import SFClient from "../../../../clients/sf_client";

export default function ProductList() {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        async function getProducts() {
            await showProducts();
        }
        getProducts();
        () => {
            // close connexion
        }
    }, []);
    const showProducts = async () => {
        const client = new SFClient();
        const products = await client.get('/products');
        console.log('products',products);
        setProducts(products['hydra:member']);
    }
    return (
        <>
            <FullscreenModal title={`Ajouter un produit`}>
                <CForm
                    className="row g-3 needs-validation"
                    noValidate
                >
                    <CCol md={12}>
                        <CFormLabel htmlFor="validationCustom01">Nom du produit</CFormLabel>
                        <CFormInput type="text" id="validationCustom01" defaultValue="Mark" required />
                        <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={12}>
                        <CFormLabel htmlFor="validationCustom02">Slug du produit</CFormLabel>
                        <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
                        <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={4}>
                        <CFormLabel htmlFor="validationCustom04">Catégorie</CFormLabel>
                        <CFormSelect id="validationCustom04">
                            <option disabled>Choose...</option>
                            <option>...</option>
                        </CFormSelect>
                        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                    </CCol>
                    <CCol md={4}>
                        <CFormLabel htmlFor="validationTags">Tags produit</CFormLabel>
                        <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
                        <CFormFeedback valid>Looks good!</CFormFeedback>
                    </CCol>
                    <CCol md={4}>
                        <CFormLabel htmlFor="validationCustom04">Publier</CFormLabel>
                        <CFormSelect id="validationCustom04">
                            <option disabled>Choose...</option>
                            <option>En attente de validation</option>
                            <option>Brouillon</option>
                            <option>Publier</option>
                        </CFormSelect>
                        <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
                    </CCol>
                    <CCol xs={12}>
                        <CFormCheck
                            type="checkbox"
                            id="invalidCheck"
                            label="Agree to terms and conditions"
                            required
                        />
                        <CFormFeedback invalid>You must agree before submitting.</CFormFeedback>
                    </CCol>
                    <CCol xs={12}>
                        <CButton color="primary" type="submit">
                            Valider
                        </CButton>
                    </CCol>
                </CForm>
            </FullscreenModal>
            {null !== products && (
                <CCard className="mb-4">
                    <CCardHeader>
                        <strong>
                            {products.length !== 0 && `Liste des produits`}
                            {products.length === 0 && `Vous n'avez pas de produit`}
                        </strong>
                    </CCardHeader>
                    <CCardBody>
                        <CTable responsive striped>
                            <CTableHead>
                                <CTableRow>
                                    <CTableHeaderCell scope="col" className="w-25">
                                        Titre
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col" className="w-25">
                                        Statut
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col" className="w-25">
                                        Lien
                                    </CTableHeaderCell>
                                    <CTableHeaderCell scope="col" className="w-25">
                                        Encore en stock
                                    </CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {
                                    products && products.map((product, key) => (
                                        <CTableRow align={'middle'} key={key}>
                                            <CTableDataCell>
                                                {product.title.rendered}
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                {product.status}
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <a href={product.slug} target={'_blank'}>
                                                    Voir le produit
                                                </a>
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                {product.stock}
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <NavLink to={`/ecommerce/product/edit`}>
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
