import React from 'react';
import {CCard, CCardHeader, CCardBody, CCardFooter} from '@coreui/react';

export default function SectionCard({ image }) {
    return (
        <CCard className="mb-4">
            <CCardBody className='text-center'>
                <img src={`${image.image}`} alt={image.name} title={image.name} width={`100%`} />
            </CCardBody>
            <CCardFooter>{image.name}</CCardFooter>
        </CCard>
    )
}
