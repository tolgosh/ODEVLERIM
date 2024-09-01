document.addEventListener('DOMContentLoaded', loadNotes);

// Yeni bir not ekleme butonuna tıklanıldığında çalışır
document.getElementById('add-note').addEventListener('click', function() {
    const noteText = document.getElementById('note').value; // Notun içeriğini al
    const noteColor = document.querySelector('input[name="color"]:checked')?.value; // Seçilen rengi al

    if (noteText && noteColor) { // Not metni ve renk seçili ise
        addNoteToList(noteText, noteColor); // Notu listeye ekle
        saveNoteToLocalStorage(noteText, noteColor); // Notu yerel depolamaya kaydet
        document.getElementById('note').value = ''; // Textarea'yı temizle
    }
});

// Yeni bir notu listeye ekler
function addNoteToList(text, color, id = Date.now()) {
    const notesContainer = document.getElementById('notes-container'); // Notların gösterildiği container'ı al
    
    const note = document.createElement('div'); // Yeni bir div oluştur
    note.classList.add('note'); // 'note' sınıfını ekle
    note.style.backgroundColor = color; // Rengi ayarla
    note.dataset.id = id; // Not için benzersiz bir ID ayarla

    const priority = document.createElement('div'); // Öncelik göstergesi için bir div oluştur
    priority.classList.add('priority'); 
    note.appendChild(priority); // Öncelik göstergesini nota ekle
    
    const noteContent = document.createElement('p'); // Not içeriği için bir paragraf oluştur
    noteContent.textContent = text; // Not metnini ayarla
    
    const deleteButton = document.createElement('button'); // Silme butonu oluştur
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function() {
        notesContainer.removeChild(note); // Notu listeden kaldır
        deleteNoteFromLocalStorage(id); // Notu yerel depolamadan sil
    });
    
    note.appendChild(noteContent); // Not içeriğini nota ekle
    note.appendChild(deleteButton); // Silme butonunu nota ekle
    notesContainer.appendChild(note); // Notu listeye ekle
}

// Arama inputuna girilen metne göre notları filtreler
document.getElementById('search').addEventListener('input', function() {
    const query = this.value.toLowerCase(); // Arama sorgusunu al ve küçük harfe dönüştür
    const notes = document.querySelectorAll('.note p'); // Tüm notları al

    notes.forEach(function(note) {
        const noteText = note.textContent.toLowerCase(); // Not metnini küçük harfe dönüştür
        if (noteText.includes(query)) {
            note.parentElement.style.display = ''; // Sorgu ile eşleşen notları göster
        } else {
            note.parentElement.style.display = 'none'; // Sorgu ile eşleşmeyen notları gizle
        }
    });
});

// Notları yerel depolamaya kaydeder
function saveNoteToLocalStorage(text, color, id = Date.now()) {
    const notes = JSON.parse(localStorage.getItem('notes')) || []; // Mevcut notları yerel depolamadan al
    notes.push({ id, text, color }); // Yeni notu ekle
    localStorage.setItem('notes', JSON.stringify(notes)); // Güncellenmiş notları yerel depolamaya kaydet
}

// Sayfa yüklendiğinde yerel depolamadaki notları yükler
function loadNotes() {
    const notes = JSON.parse(localStorage.getItem('notes')) || []; // Mevcut notları yerel depolamadan al
    notes.forEach(note => addNoteToList(note.text, note.color, note.id)); // Her bir notu listeye ekle
}

// Belirli bir notu yerel depolamadan siler
function deleteNoteFromLocalStorage(id) {
    const notes = JSON.parse(localStorage.getItem('notes')) || []; // Mevcut notları yerel depolamadan al
    const updatedNotes = notes.filter(note => note.id !== id); // Silinmek istenen not dışındakileri al
    localStorage.setItem('notes', JSON.stringify(updatedNotes)); // Güncellenmiş notları yerel depolamaya kaydet
}
