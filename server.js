// FMDO landing page server
// Serves the static site now; ready to grow into a backend (API routes) later.

const express = require('express');
const path = require('path');

const app = express();
const HOST = '0.0.0.0';                       // listen on all interfaces (LAN-accessible)
const PORT = process.env.PORT || 8080;

// --- API routes go here (add your backend below) ---
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'fmdo', time: new Date().toISOString() });
});
// Example for later:
// app.use(express.json());
// app.post('/api/contact', (req, res) => { /* ...save to DB... */ });

// --- Static site (index.html + Brand logo/, DSPs/, etc.) ---
app.use(express.static(__dirname));

app.listen(PORT, HOST, () => {
  console.log(`FMDO site running:`);
  console.log(`  local:   http://localhost:${PORT}`);
  console.log(`  network: http://192.168.1.217:${PORT}`);
});
