import React from 'react';

function Todo({ todo }) {
  const { id, title, completed } = todo;

  return (
    <div data-testid={`test-${id}`}>
      {
        completed
          ? <strike>< h2 >
            {title}
          </h2 ></strike>
          : < h2 >
            {title}
          </h2 >
      }
    </div >
  )
}

export default Todo;
