import React from 'react';
import {render} from '@testing-library/react';
import Players from './Players';

test('players are visible', () => {
    const {getByTestId} = render(<Players/>);

    const Name= getByTestId(/name/i);
    const Country= getByTestId(/country/i);
    const Searched= getByTestId(/searched/i);
})