import React, { useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setPreviewUrl(URL.createObjectURL(e.target.files[0]));
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    const formData = new FormData();
    formData.append('video', file);

    try {
      const res = await axios.post('http://localhost:5000/api/upload/video', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage('Upload successful!');
      setPreviewUrl(res.data.url);
    } catch (err) {
      setMessage('Upload failed');
    }
  };

  return (
    <div>
      <h2>Admin Dashboard - Upload Video</h2>
      <form onSubmit={handleUpload}>
        <input type="file" accept="video/*" onChange={handleFileChange} />
        <button type="submit">Upload</button>
      </form>
      {message && <p>{message}</p>}
      {previewUrl && (
        <video width="640" controls>
          <source src={previewUrl} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default AdminDashboard;
