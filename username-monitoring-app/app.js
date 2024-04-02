// username-monitoring-app/app.js

const fs = require('fs');
const axios = require('axios');
const { randomInt } = require('crypto');

const USERNAME_FILE = './usernames.json';
const GITHUB_COMMENTS_URL = 'https://api.github.com/repos/gittogethers/intro-codespaces/issues/comments';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN; // Ensure to set this in your environment variables

// Ensure usernames file exists
if (!fs.existsSync(USERNAME_FILE)) {
  fs.writeFileSync(USERNAME_FILE, JSON.stringify([]));
}

// Fetch comments and extract usernames
async function fetchAndExtractUsernames() {
  try {
    const response = await axios.get(GITHUB_COMMENTS_URL, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` },
    });

    const comments = response.data;
    const usernames = new Set(JSON.parse(fs.readFileSync(USERNAME_FILE)));

    comments.forEach(comment => {
      const username = comment.user.login;
      usernames.add(username);
    });

    fs.writeFileSync(USERNAME_FILE, JSON.stringify([...usernames]));
    console.log('Usernames updated.');
  } catch (error) {
    console.error('Error fetching comments:', error.message);
  }
}

// Randomly select a username from the list
function selectRandomUsername() {
  const usernames = JSON.parse(fs.readFileSync(USERNAME_FILE));
  if (usernames.length === 0) {
    console.log('No usernames available.');
    return;
  }

  const randomIndex = randomInt(usernames.length);
  console.log(`Randomly selected username: ${usernames[randomIndex]}`);
}

// Main function to run the application
async function main() {
  await fetchAndExtractUsernames();
  selectRandomUsername();
}

main().catch(console.error);

// Error handling and logging are implemented within the try-catch blocks and console statements.
