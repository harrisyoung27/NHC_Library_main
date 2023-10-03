function goBack() {
    window.history.back();
  }

// Define your list of PowerPoint presentations
const presentations = [
    'research.pptx',
    'Résumé-Formats.pptx',
    // Add more presentation file names as needed
];

// Function to perform a search and display results
function searchPresentations(query) {
    const resultsList = document.getElementById('resultsList');
    resultsList.innerHTML = '';

    const regex = new RegExp(query, 'i');

    presentations.forEach((presentation, index) => {
        if (regex.test(presentation)) {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = presentation;
            link.textContent = `Presentation ${index + 1}`;
            listItem.appendChild(link);
            resultsList.appendChild(listItem);
        }
    });

    if (resultsList.children.length === 0) {
        resultsList.innerHTML = '<p>No results found.</p>';
    }
}

document.getElementById('searchButton').addEventListener('click', () => {
    const searchInput = document.getElementById('searchInput').value;
    searchPresentations(searchInput);
});

// You can also listen for "Enter" key press to trigger the search
document.getElementById('searchInput').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const searchInput = document.getElementById('searchInput').value;
        searchPresentations(searchInput);
    }
});
