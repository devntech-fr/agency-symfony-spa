import React from "react";
import {
    CCol,
    CContainer,
    CRow
} from "@coreui/react";
import ProductList from "./Inventory/ProductList";
import CategoryList from "./Inventory/CategoryList";

export default function Inventory() {
    return (
        <CContainer fluid>
            <CRow>
                <CCol xs={8}>
                    <ProductList/>
                </CCol>
                <CCol xs={4}>
                    <CategoryList/>
                </CCol>
            </CRow>
        </CContainer>
    )
}
