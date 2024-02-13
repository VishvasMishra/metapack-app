// pages/api/saveData.js

import fs from 'fs';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const jsonData = req.body; // Assuming the JSON data is sent in the request body

    // Write JSON data to a text file
    fs.writeFile('data.txt', JSON.stringify(jsonData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to write data to file.' });
        return;
      }
      console.log('Data has been written to data.txt file.');
      res.status(200).json({ message: 'Data has been written to file.' });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}