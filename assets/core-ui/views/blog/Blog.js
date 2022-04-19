import React from "react";
import {
    CCol,
    CContainer,
    CRow
} from "@coreui/react";
import ArticleList from "./ArticleList";
import CategoryList from "./CategoryList";

export default function Blog() {
    return (
        <CContainer fluid>
            <CRow>
                <CCol xs={8}>
                    <ArticleList/>
                </CCol>
                <CCol xs={4}>
                    <CategoryList/>
                </CCol>
            </CRow>
        </CContainer>
    )
}
