import React from 'react';
import Banner from '../../components/header/Banner';
import Menu from '../../components/navbar/Menu';

const Header = () => {
    return (
        <header className='relative' >
            <Menu />
            <Banner />
        </header>
    );
};

export default Header;