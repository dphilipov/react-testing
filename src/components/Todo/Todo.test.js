import { render, screen, cleanup, } from '@testing-library/react';
import Todo from './Todo';

afterEach(() => {
    cleanup();
})

test('should render uncompleted Todo component', () => {
    const todo = { id: 1, title: 'Test title', completed: false };

    render(<Todo todo={todo} />);

    const TodoElement = screen.getByTestId('test-1');

    expect(TodoElement).toBeInTheDocument();
    expect(TodoElement).not.toContainHTML('<strike>');
})

test('should render uncompleted Todo component', () => {
    const todo = { id: 2, title: 'Test title 2', completed: true };

    render(<Todo todo={todo} />);

    const TodoElement = screen.getByTestId('test-2');

    expect(TodoElement).toBeInTheDocument();
    expect(TodoElement).toMatchSnapshot('<strike>');
})