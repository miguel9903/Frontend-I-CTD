const countriesSelect = document.getElementById('countries-select');

fetch('https://restcountries.eu/rest/v2/lang/es')
    .then(resp => resp.json())
    .then(countries => {
        const fragment = document.createDocumentFragment();
        countries.forEach(country => {
            const option = document.createElement('option');
            option.textContent = country.name;
            option.value = country.alpha2Code;
            fragment.appendChild(option);
        });
        countriesSelect.appendChild(fragment);
    });