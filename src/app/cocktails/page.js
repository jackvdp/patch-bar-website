import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import CocktailsHeader from '@/components/Headers/CocktailsHeader';
import Works from '@/components/Works/WorksStyle2';
import Footer from '@/components/Common/Footer';

export const metadata = {
    title: 'Vie - Works 3 Dark'
}

export default function Cocktails() {
    return (
        <>
            <Loading />
            <div className="circle-bg">
                <div className="circle-color fixed">
                    <div className="gradient-circle"></div>
                    <div className="gradient-circle two"></div>
                </div>
            </div>
            <NavbarFullMenu />
            <CocktailsHeader />
            <div className="main-content">
                <Works grid={2} hideFilter={true} filterPosition="center" />
                <Footer />
            </div>
        </>
    )
}