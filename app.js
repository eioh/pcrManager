document.addEventListener('DOMContentLoaded', () => {
    const addCharacterBtn = document.getElementById('add-character-btn');
    const newCharNameInput = document.getElementById('new-char-name');
    const newCharStarsInput = document.getElementById('new-char-stars');
    const newCharRankInput = document.getElementById('new-char-rank');
    const newCharSe1Input = document.getElementById('new-char-se1');
    const newCharSe2Input = document.getElementById('new-char-se2');
    const characterTableBody = document.querySelector('table tbody');

    let characters = []; // Array to store character data
    const localStorageKey = 'charactersData';

    // Function to save characters to localStorage
    function saveCharacters() {
        localStorage.setItem(localStorageKey, JSON.stringify(characters));
    }

    // Function to load characters from localStorage
    function loadCharacters() {
        const storedCharacters = localStorage.getItem(localStorageKey);
        if (storedCharacters) {
            characters = JSON.parse(storedCharacters);
        }
    }

    // Function to render characters in the table
    function renderCharacters() {
        characterTableBody.innerHTML = ''; // Clear existing rows

        characters.forEach((char, index) => {
            const row = characterTableBody.insertRow();
            row.insertCell().textContent = char.name;

            const limitBreakCell = row.insertCell();
            const limitBreakCheckbox = document.createElement('input');
            limitBreakCheckbox.type = 'checkbox';
            limitBreakCheckbox.checked = char.limitBreak;
            limitBreakCheckbox.addEventListener('change', () => {
                characters[index].limitBreak = limitBreakCheckbox.checked;
                saveCharacters(); // Save on change
            });
            limitBreakCell.appendChild(limitBreakCheckbox);

            // Stars
            const starsCell = row.insertCell();
            const starsInput = document.createElement('input');
            starsInput.type = 'number';
            starsInput.min = '1';
            starsInput.max = '6';
            starsInput.value = char.stars;
            starsInput.dataset.index = index; // Store index for the event listener
            starsInput.addEventListener('change', (e) => {
                const charIndex = parseInt(e.target.dataset.index);
                const newValue = parseInt(e.target.value);
                if (!isNaN(newValue) && newValue >= 1 && newValue <= 6) {
                    characters[charIndex].stars = newValue;
                    saveCharacters();
                } else {
                    // Revert to old value if input is invalid
                    e.target.value = characters[charIndex].stars;
                    alert('Please enter valid stars (1-6).');
                }
            });
            starsCell.appendChild(starsInput);

            // Rank
            const rankCell = row.insertCell();
            const rankInput = document.createElement('input');
            rankInput.type = 'number';
            rankInput.min = '1';
            rankInput.value = char.rank;
            rankInput.dataset.index = index;
            rankInput.addEventListener('change', (e) => {
                const charIndex = parseInt(e.target.dataset.index);
                const newValue = parseInt(e.target.value);
                if (!isNaN(newValue) && newValue >= 1) {
                    characters[charIndex].rank = newValue;
                    saveCharacters();
                } else {
                    e.target.value = characters[charIndex].rank;
                    alert('Please enter a valid rank (1-max).');
                }
            });
            rankCell.appendChild(rankInput);

            // Special Equipment 1 Lv (se1)
            const se1Cell = row.insertCell();
            const se1Input = document.createElement('input');
            se1Input.type = 'number';
            se1Input.min = '0';
            se1Input.value = char.se1;
            se1Input.dataset.index = index;
            se1Input.addEventListener('change', (e) => {
                const charIndex = parseInt(e.target.dataset.index);
                const newValue = parseInt(e.target.value);
                if (!isNaN(newValue) && newValue >= 0) {
                    characters[charIndex].se1 = newValue;
                    saveCharacters();
                } else {
                    e.target.value = characters[charIndex].se1;
                    alert('Please enter a valid Special Equipment 1 Lv (0-max).');
                }
            });
            se1Cell.appendChild(se1Input);

            // Special Equipment 2 Lv (se2)
            const se2Cell = row.insertCell();
            const se2Input = document.createElement('input');
            se2Input.type = 'number';
            se2Input.min = '0';
            se2Input.value = char.se2;
            se2Input.dataset.index = index;
            se2Input.addEventListener('change', (e) => {
                const charIndex = parseInt(e.target.dataset.index);
                const newValue = parseInt(e.target.value);
                if (!isNaN(newValue) && newValue >= 0) {
                    characters[charIndex].se2 = newValue;
                    saveCharacters();
                } else {
                    e.target.value = characters[charIndex].se2;
                    alert('Please enter a valid Special Equipment 2 Lv (0-max).');
                }
            });
            se2Cell.appendChild(se2Input);

            const actionsCell = row.insertCell();
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                deleteCharacter(index);
            });
            actionsCell.appendChild(deleteButton);
        });
    }

    // Function to add a new character
    function addCharacter() {
        const name = newCharNameInput.value.trim();
        const stars = parseInt(newCharStarsInput.value);
        const rank = parseInt(newCharRankInput.value);
        const se1 = parseInt(newCharSe1Input.value);
        const se2 = parseInt(newCharSe2Input.value);

        if (!name) {
            alert('Please enter a character name.');
            return;
        }
        if (isNaN(stars) || stars < 1 || stars > 6) {
            alert('Please enter valid stars (1-6).');
            return;
        }
        if (isNaN(rank) || rank < 1) {
            alert('Please enter a valid rank (1-max).');
            return;
        }
        if (isNaN(se1) || se1 < 0) {
            alert('Please enter a valid Special Equipment 1 Lv (0-max).');
            return;
        }
        if (isNaN(se2) || se2 < 0) {
            alert('Please enter a valid Special Equipment 2 Lv (0-max).');
            return;
        }

        // Check if character with the same name already exists
        if (characters.some(char => char.name === name)) {
            alert('Character with this name already exists.');
            return;
        }

        characters.push({
            name,
            limitBreak: false, // Default to false
            stars,
            rank,
            se1, // Matches problem spec (equip1Lv was a typo in my thoughts)
            se2  // Matches problem spec (equip2Lv was a typo in my thoughts)
        });

        saveCharacters(); // Save after adding
        renderCharacters();
        clearInputFields();
    }

    // Function to delete a character
    function deleteCharacter(index) {
        characters.splice(index, 1);
        saveCharacters(); // Save after deleting
        renderCharacters();
    }

    // Function to clear input fields after adding a character
    function clearInputFields() {
        newCharNameInput.value = '';
        newCharStarsInput.value = '';
        newCharRankInput.value = '';
        newCharSe1Input.value = '';
        newCharSe2Input.value = '';
    }

    // Event listener for the "Add Character" button
    if (addCharacterBtn) {
        addCharacterBtn.addEventListener('click', addCharacter);
    }

    // Initial load and render
    loadCharacters();
    renderCharacters();
});
