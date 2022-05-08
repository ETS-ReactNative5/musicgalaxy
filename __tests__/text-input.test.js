import React from 'react';

import { render, fireEvent } from '@testing-library/react-native';
import { TextInput } from '@src/components/text-input';

const sampleProps = {
    onChangeText: jest.fn(),
    value: '',
    placeholder: "Search by Artist or Song Title",
    onSubmitEditing: jest.fn()
}

describe('Testing TextInput Component', () => {

    it('should match the TextInput component snapshot', () => {
        const { toJSON } = render(<TextInput />);
        expect(toJSON()).toMatchSnapshot();
    });

    it('should render TextInput placeholder correctly', () => {
        const { getByPlaceholderText } = render(<TextInput {...sampleProps} />);
        expect(getByPlaceholderText(sampleProps.placeholder)).not.toBeNull();
    });

    it('should update the placeholder Text correctly', () => {
        const { getByPlaceholderText } = render(<TextInput {...sampleProps} />);
        fireEvent.changeText(getByPlaceholderText(sampleProps.placeholder), 'John');
    });

    it('should call onChange Function correctly', () => {
        const { getByPlaceholderText } = render(<TextInput {...sampleProps} />);
        fireEvent(getByPlaceholderText(sampleProps.placeholder), 'onChangeText');
        expect(sampleProps.onChangeText).toHaveBeenCalled();
    });
    
});

