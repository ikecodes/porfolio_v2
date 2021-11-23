import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className='contact'>
      <a href='https://twitter.com/ikecodes' rel='noreferrer' target='_blank' className='contact_twitter'>
        <FaTwitter className='contact_icon' />
      </a>
      <a href='https://github.com/ikecodes' rel='noreferrer' target='_blank' className='contact_github'>
        <FaGithub className='contact_icon' />
      </a>
      <a href='https://ng.linkedin.com/in/ike-onuorah-033737210' rel='noreferrer' target='_blank' className='contact_linkedin'>
        <FaLinkedin className='contact_icon' />
      </a>

      <a href='mailto:onuorahofficial@gmail.com' rel='noreferrer' target='_blank' className='contact_mail'>
        <FaEnvelope className='contact_icon' />
      </a>
    </div>
  );
};

export default Contact;
