const express = require('express');
const cors = require('cors'); // Add this line
const app = express();
const fs = require('fs');
const { parse } = require('json2csv');
const xlsx = require('xlsx');
const PDFDocument = require('pdfkit');

app.use(express.json());
app.use(cors()); // Use CORS middleware

app.options('/api/convert', cors()); // Enable preflight requests for /api/convert

app.post('/api/convert', (req, res) => {
  const { data, fileType } = req.body;

  if (!data || !fileType) {
    return res.status(400).json({ error: 'Data and fileType are required' });
  }

  try {
    if (fileType === 'CSV') {
      const convertedData = parse(JSON.parse(data));
      res.set('Content-Type', 'text/csv');
      res.set('Content-Disposition', 'attachment; filename="converted.csv"');
      res.send(convertedData);
    } else if (fileType === 'Excel') {
      const worksheet = xlsx.utils.json_to_sheet(JSON.parse(data));
      const workbook = xlsx.utils.book_new();
      xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
      const buf = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });
      res.set('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
      res.set('Content-Disposition', 'attachment; filename="converted.xlsx"');
      res.send(buf);
    } else if (fileType === 'PDF') {
      const doc = new PDFDocument();
      let buffers = [];
      doc.on('data', buffers.push.bind(buffers));
      doc.on('end', () => {
        const pdfData = Buffer.concat(buffers);
        res.set('Content-Type', 'application/pdf');
        res.set('Content-Disposition', 'attachment; filename="converted.pdf"');
        res.send(pdfData);
      });
      doc.text(data);
      doc.end();
    } else {
      return res.status(400).json({ error: 'Invalid fileType' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred during conversion' });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
