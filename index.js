const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// User list with required attributes
const users = [
  {
    LastName: "Guardiario",
    FirstName: "Gil",
    Email: "gil.guardiario090@gmail.com",
    Password: "tanawmanka"
  },
  {
    LastName: "Diko",
    FirstName: "Sure",
    Email: "diko_sure@ifsaktoni.com",
    Password: "wajudkayklaro"
  }
];

// Endpoint returning the user list
app.get('/api/users', (req, res) => {
  res.json(users);
});

// Root route
app.get('/', (req, res) => {
  res.send('API is running! Go to /api/users to view data.');
});

// Dynamic port assignment for Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));