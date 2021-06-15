import React from 'react';
import Container from '../Container/Container';
import Hero from '../Hero/Hero';

import { faq } from '../../data/dataStore';

const Faq = () => (
  <Container>
    <Hero titleText={faq.title} imagePicture={faq.image} />
    {faq.subtitle}
  </Container>
);

export default Faq;
