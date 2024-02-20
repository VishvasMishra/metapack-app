// pages/api/saveRequest.js

import fs from 'fs';
import path from 'path';

export default function rate(req, res) {
  if (req.method === 'POST') {
    const requestData = req.body; // Assuming JSON data is sent in the request body

    // Define the file path where you want to save the request data
    const filePath = path.join(process.cwd(), 'data.txt');

    // Write the request data to the text file
    fs.appendFile(filePath, JSON.stringify(requestData, null, 2), (err) => {
      if (err) {
        console.error('Error writing to file:', err);
        res.status(500).json({ error: 'Failed to save request data.' });
      } else {
        console.log('Request data saved successfully.');
        res.status(200).json({ message: 'Request data saved successfully.' });
      }
    });
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
