import React, { useState } from "react";
const PhotoUpload = () => {
  const [previewUrl, setPreviewUrl] = useState(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      if (selectedFile.size <= 2 * 1024 * 1024) {
        setFile(selectedFile);
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewUrl(reader.result);
        };
        reader.readAsDataURL(selectedFile);
      } else {
        alert("File size exceeds 2MB limit.");
      }
    }
  };
  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      {previewUrl && (
        <div>
          <img src={previewUrl} alt="Preview" style={{ maxWidth: "100px" }} />
        </div>
      )}
    </div>
  );
};

export default PhotoUpload;
