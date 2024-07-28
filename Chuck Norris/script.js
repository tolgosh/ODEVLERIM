document.addEventListener('DOMContentLoaded', () => {
    const jokeElement = document.getElementById('joke');
    const jokeImageElement = document.getElementById('joke-image');
    const button = document.getElementById('new-joke-button');

    async function fetchJoke() {
        try {
            const jokeResponse = await fetch('https://api.chucknorris.io/jokes/random');
            const jokeData = await jokeResponse.json();
            jokeElement.textContent = jokeData.value;

            const imageUrl = await fetchImage();
            jokeImageElement.src = imageUrl;

        } catch (error) {
            jokeElement.textContent = 'Failed to fetch a joke!';
            jokeImageElement.src = 'https://via.placeholder.com/600x400?text=No+Image';
        }
    }

    async function fetchImage() {
        try {
            const response = await fetch('https://source.unsplash.com/600x400/?chucknorris');
            return response.url;
        } catch (error) {
            return 'https://via.placeholder.com/600x400?text=No+Image';
        }
    }

    button.addEventListener('click', fetchJoke);

    fetchJoke();
});
