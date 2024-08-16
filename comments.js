// Create web server

// Import modules
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

// Create web server
const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

// Load comments from file
const COMMENTS_FILE = path.join(__dirname, 'comments.json');
function loadComments() {
  try {
    return JSON.parse(fs.readFileSync(COMMENTS_FILE, 'utf8'));
  } catch (e) {
    return [];
  }
}

// Save comments to file

function saveComments(comments) {
  fs.writeFileSync(COMMENTS_FILE, JSON.stringify(comments, null, 2));
}

// Get comments
app.get('/api/comments', (req, res) => {
  res.json(loadComments());
});


// Add comment
app.post('/api/comments', (req, res) => {
  const comments = loadComments();
  const newComment = {
      id: Date.now(),
  };
});

// Start web server
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
