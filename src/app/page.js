'use client';

import React from 'react';
import { useState } from 'react';
//= Page components
import Loading from '@/components/Common/Loader';
import NavbarFullMenu from '@/components/Common/NavbarFullMenu';
import ShowcasesFullScreen from '@/components/Showcases/ShowcaseFullscreen';

export default function ShowcasePage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <>
      <Loading />
      <NavbarFullMenu hideLogo={currentIndex === 0} />
      <ShowcasesFullScreen onSliderChange={setCurrentIndex} />
    </>
  )
}
