import React from 'react';

const Footer = () => {
    const year = 2024;
    const organization = 'MyOrg';
    return (
        <>
        <footer>
        <p>© {year} {organization}. All rights reserved.</p>
        </footer>
        </>
    );
};

export default Footer;