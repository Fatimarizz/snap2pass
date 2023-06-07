import React, { useContext, useState } from 'react';

import Link from 'next/link';
import MainSection from '../components/mainSection';
import About from '../components/about';
import UploadSelfie from '../components/uploadSelfie';
import ApiProcess from '../components/apiProcess';
import ValidationApiProcess from '../components/validationApiProcess';
import Reviews from '../components/reviews';
import ContactUs from '../components/contactUs';
const Home = () => {


  return (
    <div className="">
 <MainSection/>
 <About/>
 <ApiProcess/>
 <UploadSelfie/>
 <ValidationApiProcess/>
 <UploadSelfie/>
 <Reviews/>
<ContactUs/>
    </div>
  );
};

export default Home;
