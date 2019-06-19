import React from 'react';

import Layout from '@common/Layout';
import Navbar from '@common/Navbar';

import Header from '@sections/Header';
import About from '@sections/About';
import Services from '@sections/Services';
import Team from '@sections/Team';
import Faq from '@sections/Faq';
import Footer from '@sections/Footer';
import Form from '@common/EnquiryForm'

const BerlinPage = () => (
  <Layout>
    <Navbar />
    <Header />
    <About />
    <Services />
    <Team />
    <Faq />
    <Form />
    <Footer />
  </Layout>
);

export default BerlinPage;
