document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
  
    addBtn.addEventListener('click', function() {
      const todoText = todoInput.value.trim();
      if (todoText !== '') {
        const todoItem = document.createElement('li');
        todoItem.textContent = todoText;
        todoItem.classList.add('flex', 'justify-between', 'items-center', 'border-b', 'py-2');
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        deleteButton.classList.add('text-red-500');
  
        deleteButton.addEventListener('click', function() {
          todoItem.remove();
        });
  
        todoItem.appendChild(deleteButton);
        todoList.appendChild(todoItem);
        todoInput.value = '';
      }
    });
  
    todoList.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        e.target.classList.toggle('line-through');
      }
    });
  });
  