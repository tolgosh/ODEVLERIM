document.addEventListener('DOMContentLoaded', (event) => {
    loadTasks();
  });
  
  function newElement() {
    const inputValue = document.getElementById("task").value.trim();
    if (inputValue === '') {
      showToast('Görev boş bırakılamaz!', 'danger');
      return;
    }
    addTaskToDOM(inputValue);
    document.getElementById("task").value = '';
  
    saveTasks();
    showToast('Görev eklendi.', 'success');
  }
  
  function addTaskToDOM(taskText, isChecked = false) {
    const li = document.createElement("li");
    li.classList.add("list-group-item");
    li.innerText = taskText;
  
    if (isChecked) {
      li.classList.add('checked');
    }
  
    li.addEventListener('click', function() {
      this.classList.toggle('checked');
      saveTasks();
    });
  
    const span = document.createElement("span");
    span.className = "close";
    span.innerHTML = "&times;";
    span.onclick = function() {
      const div = this.parentElement;
      div.style.display = "none";
      div.remove();
      saveTasks();
      showToast('Görev silindi.', 'warning');
    };
    li.appendChild(span);
  
    document.getElementById("list").appendChild(li);
  }
  
  function saveTasks() {
    const tasks = [];
    document.querySelectorAll('ul li').forEach(li => {
      tasks.push({
        text: li.firstChild.textContent,
        checked: li.classList.contains('checked')
      });
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
  
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => addTaskToDOM(task.text, task.checked));
  }
  
  function showToast(message, type) {
    const toastElement = document.getElementById('liveToast');
    const toastBody = toastElement.querySelector('.toast-body');
    toastBody.textContent = message;
  
    const toast = new bootstrap.Toast(toastElement);
    toast.show();
  }
  