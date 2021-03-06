import React from 'react'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { NameProduct } from '../../components/serviceproducts/productname/NameProduct';
import { Description } from '../../components/serviceproducts/description/DescriptionProduct'
import { Contenedor } from '../../components/serviceproducts/description/description.elements';
import { LocationRating } from '../../components/serviceproducts/locationrating/LocationRating';
// import { ImageGallery } from 'react-image-gallery';

export const Products = () => {
  const DEFAULTID = 0;
  return (
    <Contenedor>
      <Header />
        <NameProduct id={DEFAULTID}/>
        <LocationRating id={DEFAULTID}/>
        {/* <ImageGallery /> */}
        <Description id={DEFAULTID}/>
      <Footer />
    </Contenedor>
  )
}
