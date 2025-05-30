import React from 'react';
import CharacterRow from './CharacterRow';
import styles from './CharacterTable.module.css'; // Import CSS module

const CharacterTable = ({ characters, onUpdateCharacter, onDeleteCharacter }) => {
  if (!characters || characters.length === 0) {
    return <p className={styles.emptyMessage}>No characters to display. Add some!</p>;
  }

  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Character Name</th>
          <th>Limit Break</th>
          <th>Stars (1-6)</th>
          <th>Rank (1-max)</th>
          <th>Special Equip 1 Lv (0-max)</th>
          <th>Special Equip 2 Lv (0-max)</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((character) => (
          <CharacterRow
              key={character.id} // ID is now guaranteed by App.js
            character={character}
            onUpdate={onUpdateCharacter}
            onDelete={onDeleteCharacter}
          />
        ))}
      </tbody>
    </table>
  );
};

export default CharacterTable;
