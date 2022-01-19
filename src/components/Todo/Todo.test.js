import { render, screen, cleanup, } from '@testing-library/react';
import Todo from './Todo';

test('should render uncompleted Todo component', () => {
    const todo = { id: 1, title: 'Test title', completed: false };

    render(<Todo todo={todo} />);

    const TodoElement = screen.getByTestId('test-1');

    expect(TodoElement).toBeInTheDocument();
})