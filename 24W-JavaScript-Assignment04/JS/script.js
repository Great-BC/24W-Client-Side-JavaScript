document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('search-form');
    const contentWrapper = document.querySelector('.content-wrapper')
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevents form submission
        const query = document.getElementById('search-input').value.trim(); 
        if (query !== '') {
            searchMovies(query); // Calls the function to search movies
            contentWrapper.style.backgroundImage = "none";
            contentWrapper.style.padding = "0px";

            
        }

    });

    // searches movies using IMDb API
    async function searchMovies(query) {
        // Student info
         document.getElementById('student-info').innerText = 'Name: Great Cocodia \n Student ID: 200555844';

        // Makes API call to IMDb API
        const apiKey = '51c5484317msh91330c4a0d166a0p124ed8jsn524a175b45d8';
        const url = `https://imdb188.p.rapidapi.com/api/v1/searchIMDB?query=${query}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': apiKey,
                'X-RapidAPI-Host': 'imdb188.p.rapidapi.com',
                
            }
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
            // Calls function to display results on the HTML page
            displayResults(result);
        } catch (error) {
            console.error(error);
        }
    }

    // Displays search results on the HTML page
    function displayResults(data) {
        const resultsContainer = document.getElementById('results-container');
        resultsContainer.innerHTML = ''; // Clears previous results

        const movieResults = data.data.filter(item => ['movie', 'tvSeries', 'tvMovie'].includes(item.qid));

        if (movieResults.length > 0) {
            // Loops through each movie result and display it
            movieResults.forEach(movie => {
                const title = movie.title;
                const year = movie.year;
                const stars = movie.stars;
                const poster = movie.image;
                const imdbLink = `https://www.imdb.com/title/${movie.id}/`;

                const movieElement = document.createElement('div');
                movieElement.classList.add('movie');
                movieElement.innerHTML = `
                    <div class="movie-container">
                    <img src="${poster}" alt="${title} Poster" class="movie-image">
                    <div class="movie-info">
                        <h3>${title}</h3>
                        <p>Year: ${year}</p>
                        <p>Starring: ${stars}</p>
                        <a href="${imdbLink}" target="_blank">IMDb Link</a>
                    </div>
                    <div>
                `;
                resultsContainer.appendChild(movieElement);
            });
        } else {
            // Displays message if no results found
            resultsContainer.innerHTML = '<p>Results not found</p>';
        }
    }
});
