import React, { useState } from 'react';
import axios from 'axios';

function FileUploadForm() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (!selectedFile) {
      alert('โปรดเลือกไฟล์ก่อน');
      return;
    }

    const formData = new FormData();
    formData.append('sampleFile', selectedFile);

    axios.post('http://localhost:5000/upload', formData)
      .then((response) => {
        console.log('ไฟล์ถูกอัปโหลดเรียบร้อยแล้ว', response.data);
      })
      .catch((error) => {
        console.error('เกิดข้อผิดพลาดในการอัปโหลดไฟล์', error);
      });
  };

  return (
    <div>
      <h1>แบบฟอร์มอัปโหลดไฟล์</h1>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>อัปโหลดไฟล์</button>
    </div>
  );
}

export default FileUploadForm;
