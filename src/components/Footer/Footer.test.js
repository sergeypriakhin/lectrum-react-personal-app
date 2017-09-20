import React from 'react';
import { shallow } from 'enzyme';
import Footer from './';

const result = shallow(<Footer />);

describe('Footer component:', () => {
    test('Should have 1 \'footer\' element', () => {
        expect(result.find('footer').length).toBe(1);
    });

    test('Should have 4  link \'a\' element', () => {
        expect(result.find('a').length).toBe(4);
    });

    test('Should have github icon \'GoMarkGithub\' element', () => {
        expect(result.find('GoMarkGithub').length).toBe(1);
    });

    test('Should have github icon \'FaTwitter\' element', () => {
        expect(result.find('FaTwitter').length).toBe(1);
    });

    test('Should have github icon \'FaFacebook\' element', () => {
        expect(result.find('FaFacebook').length).toBe(1);
    });

    test('Should have github icon \'FaLinkedin\' element', () => {
        expect(result.find('FaLinkedin').length).toBe(1);
    });
});
