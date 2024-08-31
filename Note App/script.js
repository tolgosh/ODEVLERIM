document.addEventListener('DOMContentLoaded', loadNotes);

document.getElementById('add-note').addEventListener('click', function() {
    const noteText = document.getElementById('note').value;
    const noteColor = document.querySelector('input[name="color"]:checked')?.value;

    if (noteText && noteColor) {
        addNoteToList(noteText, noteColor);
        saveNoteToLocalStorage(noteText, noteColor);
        document.getElementById('note').value = '';
    }
});

function addNoteToList(text, color, id = Date.now()) {
    const notesContainer = document.getElementById('notes-container');
    
    const note = document.createElement('div');
    note.classList.add('note');
    note.style.backgroundColor = color;
    note.dataset.id = id;

    const priority = document.createElement('div');
    priority.classList.add('priority');
    note.appendChild(priority);
    
    const noteContent = document.createElement('p');
    noteContent.textContent = text;
    
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        notesContainer.removeChild(note);
        deleteNoteFromLocalStorage(id);
    });
    
    note.appendChild(noteContent);
    note.appendChild(deleteButton);
    notesContainer.appendChild(note);
}

document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase();
    const notes = document.querySelectorAll('.note p');

    notes.forEach(function(note) {
        const noteText = note.textContent.toLowerCase();
        if (noteText.includes(query)) {
            note.parentElement.style.display = '';
        } else {
            note.parentElement.style.display = 'none';
        }
    });
});

function saveNoteToLocalStorage(text, color, id = Date.now()) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.push({ id, text, color });
    localStorage.setItem('notes', JSON.stringify(notes));
}

function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    notes.forEach(note => addNoteToList(note.text, note.color, note.id));
}

function deleteNoteFromLocalStorage(id) {
    const notes = JSON.parse(localStorage.getItem('notes')) || [];
    const updatedNotes = notes.filter(note => note.id !== id);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
}
