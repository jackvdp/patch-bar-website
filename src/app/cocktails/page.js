import React from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import CocktailsHeader from '@/components/Headers/CocktailsHeader';
import CocktailGrid from '@/components/Works/CocktailGrid';
import Footer from '@/components/Common/Footer';

export const metadata = {
    title: 'Patch - Cocktails'
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
                <CocktailGrid />
                <Footer />
            </div>
        </>
    )
}