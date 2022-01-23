import Button from '../Button/Button';
import { render, cleanup, screen } from '@testing-library/react';

afterEach(() => {
    cleanup();
})

test('should render component', () => {
    render(<Button label="Test Label"></Button>);

    const ButtonElement = screen.getByTestId('button');
    expect(ButtonElement).toBeInTheDocument();
    expect(ButtonElement).not.toHaveTextContent('');
    expect(ButtonElement).toHaveTextContent('Test Label');
})