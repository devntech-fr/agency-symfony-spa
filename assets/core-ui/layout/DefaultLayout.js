import React from 'react'
import Sidebar from '../layout-part/Sidebar'
import Header from '../layout-part/Header'
import RouteContent from '../layout-part/RouteContent'
import Footer from '../layout-part/Footer'

const DefaultLayout = ({ demo }) => {
    // console.log('demo:',demo);
    return (
        <React.Fragment>
            <Sidebar demo={demo} />
            <div className="wrapper d-flex flex-column min-vh-100 bg-light">
                <Header />
                <div className="body flex-grow-1 px-3">
                    <RouteContent demo={demo} />
                </div>
                <Footer />
            </div>
        </React.Fragment>
    )
}

export default DefaultLayout
