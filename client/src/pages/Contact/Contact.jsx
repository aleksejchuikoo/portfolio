import React from 'react';

import Form from '../../components/Form/Form';
import Text from '../../components/Text/Text';
import Title from '../../components/Title/Title';

import './Contact.scss';

function Contact() {
  return (
    <div className="wrapper">
      <div className="wrapper-left">
        <div className="wrapper-info">
          <Title>Contact me</Title>
          <Text>
            If you have a question or want to work together, don’t hesitate to contact me using
            below form either.
          </Text>
          <Form />
        </div>
      </div>
      <div className="wrapper-right"></div>
    </div>
  );
}

export default Contact;
