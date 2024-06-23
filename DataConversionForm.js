import React, { useState } from 'react';
import axios from 'axios';

const DataConversionForm = () => {
  const [data, setData] = useState('');
  const [fileType, setFileType] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDataChange = (e) => {
    setData(e.target.value);
  };

  const handleFileTypeChange = (e) => {
    setFileType(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/convert', {
        data,
        fileType,
      }, { responseType: 'blob' });

      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `converted.${fileType.toLowerCase()}`;
      link.click();
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred during conversion.');
    }
  };

  return (
    <div className="container">
      <h1>Hackathon</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="data">Data:</label>
          <textarea id="data" value={data} onChange={handleDataChange} />
        </div>
        <div className="form-group">
          <label htmlFor="fileType">File Type:</label>
          <select id="fileType" value={fileType} onChange={handleFileTypeChange}>
            <option value="">Select File Type</option>
            <option value="CSV">CSV</option>
            <option value="Excel">Excel</option>
            <option value="PDF">PDF</option>
          </select>
        </div>
        <button type="submit" disabled={!data || !fileType}>Convert and Download</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
};

export default DataConversionForm;

