import React from 'react';
import GifExpertApp from '../GifExpertApp';

import "@testing-library/jest-dom";
import { shallow } from "enzyme";


describe('Pruebas en GifExpertApp', () => {
    test('Primera prueba, comprobar estado - Identico', () => {

        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapShot();
        
    })
    
    
})
