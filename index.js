

document.addEventListener('DOMContentLoaded', () => {
    const countriesGrid = document.getElementById('countries-grid');
    const themeSwitcher = document.getElementById('theme-switcher');
    const body = document.body;

   
    async function fetchCountries() {
       
            const response = await fetch('https://restcountries.com/v3.1/all');
            const countries = await response.json();
            displayCountries(countries);
        
    }

    function displayCountries(countries) {
        countriesGrid.innerHTML = ''; // Clear previous content

        countries.forEach(country => {
            const countryCard = document.createElement('div');
            countryCard.classList.add('country-card');

            countryCard.innerHTML = `
                <img src="${country.flags.png}" alt="Flag of ${country.name.common}">
                <div class="card-body">
                    <h3>${country.name.common}</h3>
                    <p><strong>Population:</strong> ${country.population.toLocaleString()}</p>
                    <p><strong>Region:</strong> ${country.region}</p>
                    <p><strong>Capital:</strong> ${country.capital ? country.capital[0] : 'N/A'}</p>
                </div>
            `;

            countriesGrid.appendChild(countryCard);
        });
    }

    // Theme switcher functionality
    themeSwitcher.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeSwitcher.textContent = body.classList.contains('dark-theme') ? 'Dark Mode' : 'Light Mode';
    });

    // Initialize fetching and displaying countries
    fetchCountries();
});
