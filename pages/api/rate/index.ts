const fs = require('fs');

function rate(req, res) {
  if (req.method === 'POST') {
    const jsonData = req.body;
    fs.writeFile('data.txt', JSON.stringify(jsonData), (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to write data to file.' });
        
        return;
      }
      res.status(200).json({ message: 'Data has been written to file.' });
    });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
export default rate;