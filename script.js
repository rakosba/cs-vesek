const companies = [
    { name: "Company A", logo: "companyA.png" },
    { name: "Company B", logo: "companyB.png" },
    // Add more companies here
];

const companiesList = document.getElementById('companies-list');

companies.forEach(company => {
    const companyDiv = document.createElement('div');
    companyDiv.classList.add('company');

    const logoImg = document.createElement('img');
    logoImg.src = company.logo;
    logoImg.alt = company.name + ' logo';
    companyDiv.appendChild(logoImg);

    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('rating');
    for (let i = 1; i <= 5; i++) {
        const starInput = document.createElement('input');
        starInput.type = 'radio';
        starInput.id = company.name + '-star-' + i;
        starInput.name = company.name + '-rating';
        starInput.value = i;
        ratingDiv.appendChild(starInput);

        const starLabel = document.createElement('label');
        starLabel.htmlFor = company.name + '-star-' + i;
        starLabel.textContent = '★';
        ratingDiv.appendChild(starLabel);
    }
    companyDiv.appendChild(ratingDiv);

    companiesList.appendChild(companyDiv);
});
