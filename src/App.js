import React, { useState, useEffect, useCallback } from 'react';
import CharacterTable from './components/CharacterTable';
import CharacterForm from './components/CharacterForm';
import styles from './App.module.css'; // Import CSS module

const LOCAL_STORAGE_KEY = 'priconneCharacters';

function App() {
  const [characters, setCharacters] = useState([]);

  // Load characters from localStorage on mount
  useEffect(() => {
    try {
      const storedCharacters = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedCharacters) {
        setCharacters(JSON.parse(storedCharacters));
      }
    } catch (error) {
      console.error("Error loading characters from localStorage:", error);
      setCharacters([]); // Fallback to empty array on error
      // Optionally, clear corrupted data or inform user
      // localStorage.removeItem(LOCAL_STORAGE_KEY); 
    }
  }, []);

  // Save characters to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(characters));
    } catch (error) {
      console.error("Error saving characters to localStorage:", error);
    }
  }, [characters]);

  const handleAddCharacter = useCallback((newCharacter) => {
    // Basic validation: prevent adding if name already exists
    if (characters.some(char => char.name === newCharacter.name)) {
      alert(`Character with name "${newCharacter.name}" already exists.`);
      return;
    }
    setCharacters(prevChars => [
      ...prevChars,
      { ...newCharacter, id: Date.now().toString() } // Add a unique ID
    ]);
  }, [characters]); // Add characters to dependency array

  const handleUpdateCharacter = useCallback((id, updatedCharacterData) => {
    setCharacters(prevChars =>
      prevChars.map(char =>
        char.id === id ? { ...char, ...updatedCharacterData } : char
      )
    );
  }, []);

  const handleDeleteCharacter = useCallback((id) => {
    setCharacters(prevChars => prevChars.filter(char => char.id !== id));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>プリコネR キャラクター管理</h1>
      <CharacterForm onAddCharacter={handleAddCharacter} />
      <CharacterTable
        characters={characters}
        onUpdateCharacter={handleUpdateCharacter}
        onDeleteCharacter={handleDeleteCharacter}
      />
    </div>
  );
}

export default App;
