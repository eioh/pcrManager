# Princess Connect Re:Dive Character Manager

## Description

This application helps you manage your characters for the game Princess Connect Re:Dive. You can keep track of their Limit Break status, Stars, Rank, and Special Equipment levels. The data is saved locally in your web browser's local storage, so your character list will persist between sessions on the same browser.

## How to Use

### Opening the Application

*   **Locally**: Clone or download the repository. Open the `index.html` file directly in your web browser.
*   **Via GitHub Pages**: If deployed, you can access it using the GitHub Pages URL (see "How to Deploy/View on GitHub Pages" below).

### Adding a New Character

1.  Locate the "Add New Character" section below the main table.
2.  Enter the character's name in the "Character Name" field.
3.  Enter the character's star level (1-6) in the "Stars" field.
4.  Enter the character's current rank in the "Rank" field.
5.  Enter the level for Special Equipment 1 in the "Special Equipment 1 Lv" field (0 if not applicable).
6.  Enter the level for Special Equipment 2 in the "Special Equipment 2 Lv" field (0 if not applicable).
7.  Click the "Add Character" button. The character will appear in the table above.

### Updating Character Information

Character information can be updated directly in the table:

*   **Limit Break**: Click the checkbox in the "Limit Break" column for the respective character to toggle its status.
*   **Stars**: Click into the number field in the "Stars" column for a character and change its value (1-6).
*   **Rank**: Click into the number field in the "Rank" column and change its value.
*   **Special Equipment Levels**: Click into the number fields in the "Special Equipment 1 Lv" or "Special Equipment 2 Lv" columns and change their values.

All changes are saved automatically to your browser's local storage.

### Deleting a Character

1.  Find the character you wish to remove in the table.
2.  Click the "Delete" button in the "Actions" column for that character's row.
3.  The character will be removed from the table and from local storage.

### Data Storage

This application uses your web browser's **local storage** to save your character data. This means the data is stored on your computer and will persist when you close and reopen the browser. However, it is specific to the browser you use (e.g., data saved in Chrome will not be visible in Firefox). Clearing your browser's cache or local storage for this site will erase your data.

## How to Deploy/View on GitHub Pages

1.  **Commit Files**: Ensure `index.html`, `style.css`, and `app.js` are committed and pushed to your GitHub repository.
2.  **Enable GitHub Pages**:
    *   In your GitHub repository, go to "Settings".
    *   Navigate to the "Pages" section in the sidebar.
    *   Under "Build and deployment", for "Source", select "Deploy from a branch".
    *   Choose the branch you want to deploy from (e.g., `main` or `master`).
    *   For the folder, select `/ (root)`.
    *   Click "Save".
3.  **Access Your Site**:
    *   GitHub Pages will provide you with a URL, typically in the format: `https://<your-username>.github.io/<your-repository-name>/`
    *   It might take a few minutes for the site to become live after enabling GitHub Pages.

Enjoy managing your Priconne characters!
