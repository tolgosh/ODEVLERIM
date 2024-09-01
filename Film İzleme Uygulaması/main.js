document.addEventListener("DOMContentLoaded", function() {
    const filmDetails = {
        1: {
            title: "Inception",
            category: "Aksiyon, Bilim Kurgu",
            duration: "148 dakika",
            imdb: "8.8",
            description: "Rüyaların içinde geçen, karmaşık ve zekice kurgulanmış bir bilim kurgu filmi.",
            poster: "images/inception.jpg"
        },
        2: {
            title: "The Dark Knight",
            category: "Aksiyon, Gerilim",
            duration: "152 dakika",
            imdb: "9.0",
            description: "Batman'in Joker ile olan mücadelesini anlatan unutulmaz bir aksiyon filmi.",
            poster: "images/dark_knight.jpg"
        },
        3: {
            title: "Interstellar",
            category: "Macera, Bilim Kurgu",
            duration: "169 dakika",
            imdb: "8.6",
            description: "İnsanlığın hayatta kalma mücadelesini anlatan epik bir bilim kurgu filmi.",
            poster: "images/interstellar.jpg"
        }
    };

    // Film Detay Sayfası
    const filmId = new URLSearchParams(window.location.search).get('film');
    if (filmId && filmDetails[filmId]) {
        document.getElementById("film-title").textContent = filmDetails[filmId].title;
        document.getElementById("film-poster").src = filmDetails[filmId].poster;
        document.getElementById("film-category").textContent = `Kategori: ${filmDetails[filmId].category}`;
        document.getElementById("film-duration").textContent = `Süre: ${filmDetails[filmId].duration}`;
        document.getElementById("film-imdb").textContent = `IMDB Puanı: ${filmDetails[filmId].imdb}`;
        document.getElementById("film-description").textContent = filmDetails[filmId].description;
    }

    // Favorilere Ekleme
    const addToFavoritesButton = document.getElementById("add-to-favorites");
    if (addToFavoritesButton) {
        addToFavoritesButton.addEventListener("click", function() {
            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            if (!favorites.includes(filmId)) {
                favorites.push(filmId);
                localStorage.setItem("favorites", JSON.stringify(favorites));
                alert("Film favorilere eklendi!");
            } else {
                alert("Film zaten favorilerde!");
            }
        });
    }

    // Favoriler Sayfası
    const favoritesList = document.getElementById("favorites-list");
    if (favoritesList) {
        const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
        favorites.forEach(id => {
            const film = filmDetails[id];
            const card = document.createElement("div");
            card.className = "col-md-4 col-sm-6";
            card.innerHTML = `
                <div class="card mb-4 shadow-sm border-0 rounded">
                    <img src="${film.poster}" class="card-img-top rounded-top" alt="${film.title}">
                    <div class="card-body text-center">
                        <h5 class="card-title text-primary font-weight-bold">${film.title}</h5>
                        <p class="card-text">Kategori: ${film.category}</p>
                        <p class="card-text">IMDB: ${film.imdb}</p>
                    </div>
                </div>
            `;
            favoritesList.appendChild(card);
        });
    }
});
