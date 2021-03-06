import './App.css';
import Todo from './components/Todo/Todo';
import Button from './components/Button/Button';

function App() {
  const todos = [
    { id: 1, title: 'Wash dishes', completed: false },
    { id: 2, title: 'Walk dog', completed: true },
    { id: 3, title: 'Buy groceries', completed: true },
    { id: 4, title: 'Learn Jest testing', completed: false },
    { id: 5, title: 'Become amazing', completed: false },
  ]

  return (
    <div className="App">
      {todos.map(todo => (
        <Todo todo={todo} />
      ))}

      <Button label="Click me!"></Button>
    </div>
  );
}

export default App;
