import React from 'react';
import styles from './CharacterRow.module.css'; // Import CSS module

const CharacterRow = ({ character, onUpdate, onDelete }) => {
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    let targetValue = type === 'checkbox' ? checked : value;
    let parsedValue;

    if (type === 'number') {
      if (targetValue === '') {
        parsedValue = undefined; // Treat empty string as undefined for numerical fields
      } else {
        parsedValue = parseInt(targetValue, 10);
      }

      // Validation checks
      if (name === 'stars') {
        if (targetValue !== '' && (isNaN(parsedValue) || parsedValue < 1 || parsedValue > 6)) {
          alert('Stars must be a number between 1 and 6. Reverting to previous value.');
          e.target.value = character.stars === undefined ? '' : character.stars; // Revert
          return;
        }
      } else if (name === 'rank' || name === 'se1Lv' || name === 'se2Lv') {
        if (targetValue !== '' && (isNaN(parsedValue) || parsedValue < 0)) {
          alert(`${name} must be a non-negative number. Reverting to previous value.`);
          e.target.value = character[name] === undefined ? '' : character[name]; // Revert
          return;
        }
      }
      // If valid or empty, use parsedValue (which could be undefined)
      onUpdate(character.id, { ...character, [name]: parsedValue });
    } else {
      // For checkbox (limitBreak) and any future text inputs
      onUpdate(character.id, { ...character, [name]: targetValue });
    }
  };

  const handleDeleteClick = () => {
    onDelete(character.id);
  };

  return (
    <tr>
      <td className={styles.nameCell}>{character.name}</td>
      <td>
        <input
          type="checkbox"
          name="limitBreak"
          checked={character.limitBreak || false}
          onChange={handleInputChange}
          className={styles.checkbox}
        />
      </td>
      <td>
        <input
          type="number"
          name="stars"
          value={character.stars === undefined ? '' : character.stars}
          onChange={handleInputChange}
          min="1"
          max="6"
          className={styles.inputNumber}
        />
      </td>
      <td>
        <input
          type="number"
          name="rank"
          value={character.rank === undefined ? '' : character.rank}
          onChange={handleInputChange}
          min="1"
          className={styles.inputNumber}
        />
      </td>
      <td>
        <input
          type="number"
          name="se1Lv"
          value={character.se1Lv === undefined ? '' : character.se1Lv}
          onChange={handleInputChange}
          min="0"
          className={styles.inputNumber}
        />
      </td>
      <td>
        <input
          type="number"
          name="se2Lv"
          value={character.se2Lv === undefined ? '' : character.se2Lv}
          onChange={handleInputChange}
          min="0"
          className={styles.inputNumber}
        />
      </td>
      <td>
        <button onClick={handleDeleteClick} className={styles.deleteButton}>Delete</button>
      </td>
    </tr>
  );
};

export default CharacterRow;
