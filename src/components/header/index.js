import { ImageTwoTone } from '@material-ui/icons';
import React from 'react';
import './styles.scss';
import MenuWheel from '../menu-wheel';

function Header() {
  return (
    <header className='header'>
      <MenuWheel />
    </header>
  );
}

export default Header;
