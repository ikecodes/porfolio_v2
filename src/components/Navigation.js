import React, { useState } from 'react';

const Navigation = () => {
  const [activeMenu, setactiveMenu] = useState('');
  const [activeIcon, setActiveIcon] = useState(false);
  const handleActive = (current) => {
    setactiveMenu(current);
  };
  const navItem = [
    { to: '/#about', menu: 'about' },
    { to: '/#experience', menu: 'experience' },
    { to: '/#work', menu: 'work' },
    { to: '/#contact', menu: 'contact' },
  ];
  return (
    <nav className='navigation'>
      <span className={`navigation_icon ${activeIcon ? 'active' : ''}`} onClick={() => setActiveIcon((prev) => !prev)}></span>
      <ul className={`navigation_list ${activeIcon ? '' : 'inactive'}`}>
        {navItem.map(({ to, menu }) => (
          <li key={menu} className='navigation_item'>
            <span className={to === activeMenu ? 'active' : ''}>•</span>
            <a href={to} className={`navigation_link ${to === activeMenu ? 'active' : ''}`} onClick={() => handleActive(to)}>
              {menu}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
