import React, { useState } from 'react';
import styles from './CharacterForm.module.css'; // Import CSS module

const CharacterForm = ({ onAddCharacter }) => {
  const [name, setName] = useState('');
  const [stars, setStars] = useState('');
  const [rank, setRank] = useState('');
  const [se1Lv, setSe1Lv] = useState('');
  const [se2Lv, setSe2Lv] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!name.trim()) {
      newErrors.name = 'Character name is required.';
    }

    const numStars = stars === '' ? undefined : parseInt(stars, 10);
    const numRank = rank === '' ? undefined : parseInt(rank, 10);
    const numSe1Lv = se1Lv === '' ? undefined : parseInt(se1Lv, 10);
    const numSe2Lv = se2Lv === '' ? undefined : parseInt(se2Lv, 10);

    if (stars !== '' && (numStars === undefined || numStars < 1 || numStars > 6)) {
      newErrors.stars = 'Stars must be a number between 1 and 6.';
    }
    if (rank !== '' && (numRank === undefined || numRank < 1)) {
      newErrors.rank = 'Rank must be a number, 1 or greater.';
    }
    if (se1Lv !== '' && (numSe1Lv === undefined || numSe1Lv < 0)) {
      newErrors.se1Lv = 'SE1 Lv must be a number, 0 or greater.';
    }
    if (se2Lv !== '' && (numSe2Lv === undefined || numSe2Lv < 0)) {
      newErrors.se2Lv = 'SE2 Lv must be a number, 0 or greater.';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    // Values already parsed and validated in validateForm, re-parse for submission
    const finalStars = stars === '' ? undefined : parseInt(stars, 10);
    const finalRank = rank === '' ? undefined : parseInt(rank, 10);
    const finalSe1Lv = se1Lv === '' ? undefined : parseInt(se1Lv, 10);
    const finalSe2Lv = se2Lv === '' ? undefined : parseInt(se2Lv, 10);

    onAddCharacter({
      name: name.trim(),
      limitBreak: false, // Default
      stars: numStars,
      rank: numRank,
      se1Lv: numSe1Lv,
      se2Lv: numSe2Lv,
    });

    // Reset form fields
    setName('');
    setStars('');
    setRank('');
    setSe1Lv('');
    setSe2Lv('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Add New Character</h2>
      <div className={styles.formGroup}>
        <label className={styles.label}>Character Name: </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
        />
        {errors.name && <span className={styles.errorMessage}>{errors.name}</span>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Stars (1-6): </label>
        <input
          type="number"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
          min="1"
          max="6"
          className={`${styles.input} ${errors.stars ? styles.inputError : ''}`}
        />
        {errors.stars && <span className={styles.errorMessage}>{errors.stars}</span>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Rank (1-max): </label>
        <input
          type="number"
          value={rank}
          onChange={(e) => setRank(e.target.value)}
          min="1"
          className={`${styles.input} ${errors.rank ? styles.inputError : ''}`}
        />
        {errors.rank && <span className={styles.errorMessage}>{errors.rank}</span>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Special Equipment 1 Lv (0-max): </label>
        <input
          type="number"
          value={se1Lv}
          onChange={(e) => setSe1Lv(e.target.value)}
          min="0"
          className={`${styles.input} ${errors.se1Lv ? styles.inputError : ''}`}
        />
        {errors.se1Lv && <span className={styles.errorMessage}>{errors.se1Lv}</span>}
      </div>
      <div className={styles.formGroup}>
        <label className={styles.label}>Special Equipment 2 Lv (0-max): </label>
        <input
          type="number"
          value={se2Lv}
          onChange={(e) => setSe2Lv(e.target.value)}
          min="0"
          className={`${styles.input} ${errors.se2Lv ? styles.inputError : ''}`}
        />
        {errors.se2Lv && <span className={styles.errorMessage}>{errors.se2Lv}</span>}
      </div>
      <button type="submit" className={styles.submitButton}>Add Character</button>
    </form>
  );
};

export default CharacterForm;
