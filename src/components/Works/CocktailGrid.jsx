'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import initIsotope from "@/common/initIsotope";

const grid = 3

function CocktailGrid() {
  useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className={`${grid ? (grid === 3 ? 'three-column' : null) : null} portfolio section-padding pb-70`}>
      <div className="container">
        <div className="row">
          <div className="gallery full-width">
            {cocktails.map((item, index) => (
              <Cocktail key={index} item={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default CocktailGrid;

function Cocktail({ item, index }) {
  return (
    <div key={index} className={`${grid === 3 ? 'col-lg-4 col-md-6' : grid === 2 ? 'col-md-6' : 'col-12'} items graphic wow fadeInUp`} data-wow-delay=".4s">
      <div className="item-img">
        <div className='imago wow'>
          <Image
            src={item.imgUrl}
            alt="image"
            layout="responsive"
            width={500}
            height={625}
          />
          <div className="recipe-overlay">
            <ol>
              {item.steps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ol>
          </div>
        </div>
        <div className="item-img-overlay"></div>
      </div>
      <div className="cont">
        <h6>{item.title}</h6>
        <span>{item.shortDescription}</span>
      </div>
    </div>
  )
}


const cocktails = [
  {
    title: 'Pink Geisha',
    shortDescription: 'Fruity, Floral, Elegant',
    imgUrl: '/custom-content/cocktails/pinkgeisha.png',
    steps: [
      'Muddle raspberries with lemon.',
      'Add gin, sake, and elderflower liqueur.',
      'Shake with ice and double strain.',
      'Garnish with a raspberry.'
    ]
  },
  {
    title: 'Spicy Margarita',
    shortDescription: 'Spicy, Sour, Zesty',
    imgUrl: '/custom-content/cocktails/spicymarg.png',
    steps: [
      'Rim glass with salt.',
      'Combine tequila, lime juice, agave syrup, and jalapeños.',
      'Shake with ice and strain.',
      'Garnish with lime wheel and jalapeño.'
    ]
  },
  {
    title: 'Icelandic Mule',
    shortDescription: 'Crisp, Spicy, Refreshing',
    imgUrl: '/custom-content/cocktails/icelandicmule.png',
    steps: [
      'Fill a mule mug with ice.',
      'Add vodka and lime juice.',
      'Top with ginger beer.',
      'Garnish with a lime slice.'
    ]
  },
  {
    title: 'Smoked Butterscotch',
    shortDescription: 'Rich, Smoky, Sweet',
    imgUrl: '/custom-content/cocktails/smokedbutterscotch.png',
    steps: [
      'Combine rum, butterscotch, lime, and guava.',
      'Shake well with ice.',
      'Strain into a chilled glass.',
      'Garnish with raspberries.'
    ]
  },
  {
    title: 'Relax in the Mediterranean',
    shortDescription: 'Herbal, Sweet, Tart',
    imgUrl: '/custom-content/cocktails/relaxmed.png',
    steps: [
      'Stir gin and Melonade liqueur over ice.',
      'Add lemon and salted honey syrup.',
      'Strain into a wine glass filled with ice.',
      'Garnish with a slice of melon.'
    ]
  },
  {
    title: 'Tangerine Dream',
    shortDescription: 'Citrusy, Sweet, Vibrant',
    imgUrl: '/custom-content/cocktails/tangerinedream.png',
    steps: [
      'Combine rum, Cointreau, tangerine syrup, and lime juice in a shaker.',
      'Shake vigorously with ice.',
      'Strain into a chilled glass over fresh ice.',
      'Garnish with a tangerine twist.'
    ]
  }
];
