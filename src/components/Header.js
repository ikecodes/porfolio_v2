import React from 'react';

const Header = () => {
  return (
    <header className='header'>
      <div className='header_text-box'>
        <div>
          <h1 className='header_hi animate__animated  animate__bounceInDown animate__delay-2s '>Hello</h1>
          <span style={{ fontSize: '5rem' }}>👋🏾</span>
        </div>
        <h1 className='header_name'>
          <span className='header_im'>I'm </span>Onuorah Ike.
        </h1>
        <p className='header_paragraph'>
          I am software engineer. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum suscipit vel a asperiores unde, perferendis, necessitatibus architecto facilis dolorum tempore rem
          deleniti, sed officia adipisci illo tempora quo. Sit, nostrum.
        </p>
      </div>
    </header>
  );
};

export default Header;
