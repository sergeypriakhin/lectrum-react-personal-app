// Core
import React from 'react';

// Components
import GoMarkGithub from 'react-icons/lib/go/mark-github';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

// Styles
import Styles from './styles.scss';

const Footer = () => (
    <footer className = { Styles.footer }>
        <div className = { Styles.container }>
            <div>
                <a
                    className = { Styles.icon }
                    href = 'https://github.com/sergeypriakhin/lectrum-react-personal-app'
                    rel = 'noopener noreferrer'
                    target = '_blank'
                    title = 'https://github.com/sergeypriakhin/lectrum-react-personal-app'>
                    <GoMarkGithub />
                </a>
                <a className = { Styles.icon } href = '' target = '_blank'>
                    <FaTwitter />
                </a>
                <a className = { Styles.icon } href = '' target = '_blank'>
                    <FaFacebook />
                </a>
                <a className = { Styles.icon } href = '' target = '_blank'>
                    <FaLinkedin />
                </a>
            </div>
            <div>© 2017 «created by Sergey Priakhin»</div>
        </div>
    </footer>
);

export default Footer;
