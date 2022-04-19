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
    CContainer,
    CButton, CForm, CFormLabel, CFormInput, CFormFeedback, CFormSelect, CFormCheck
} from "@coreui/react";
import {Link, NavLink} from "react-router-dom";
import FullscreenModal from "../../components/modal/FullscreenModal";
import WPClient from "../../../clients/wp_client";

export default function ArticleList() {
    const [posts, setPosts] = useState([]);
    const showMenuTableFromPageProps = () => {}
    const showTableValues = () => {}
    useEffect(() => {
        async function getWordPressPosts() {
            await showPosts();
        }
        getWordPressPosts();
        () => {
            // close connexion
        }
    }, []);
    const showPosts = async () => {
        const client = new WPClient();
        const posts = await client.get('/posts');
        console.log('posts',posts);
        setPosts(posts);
    }
    return (
        <CContainer fluid>
            <CCol xs={12}>
                <CCard className="mb-4">
                    <FullscreenModal title={`Ajouter un article`}>
                        <CForm
                            className="row g-3 needs-validation"
                            noValidate
                        >
                            <CCol md={12}>
                                <CFormLabel htmlFor="validationCustom01">Titre de la page</CFormLabel>
                                <CFormInput type="text" id="validationCustom01" defaultValue="Mark" required />
                                <CFormFeedback valid>Looks good!</CFormFeedback>
                            </CCol>
                            <CCol md={12}>
                                <CFormLabel htmlFor="validationCustom02">Slug de la page</CFormLabel>
                                <CFormInput type="text" id="validationCustom02" defaultValue="Otto" required />
                                <CFormFeedback valid>Looks good!</CFormFeedback>
                            </CCol>
                            <CCol md={4}>
                                <CFormLabel htmlFor="validationCustom04">Page parente</CFormLabel>
                                <CFormSelect id="validationCustom04">
                                    <option disabled>Choose...</option>
                                    <option>...</option>
                                </CFormSelect>
                                <CFormFeedback invalid>Please provide a valid city.</CFormFeedback>
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
                    <CCardHeader>
                        <strong>Liste des articles{posts.length === 0 && ' - chargement en cours...'}</strong>
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
                                        Date de publication
                                    </CTableHeaderCell>
                                </CTableRow>
                            </CTableHead>
                            <CTableBody>
                                {
                                    posts && posts.map((post, key) => (
                                        <CTableRow align={'middle'} key={key}>
                                            <CTableDataCell>
                                                {post.title.rendered}
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                {post.status}
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <a href={post.link} target={'_blank'}>
                                                    Voir l'article
                                                </a>
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                Publié le {post.date}
                                            </CTableDataCell>
                                            <CTableDataCell>
                                                <NavLink to={`/site/page/edit`}>
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
            </CCol>
        </CContainer>
    )
}
