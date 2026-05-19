import { useState } from "react";
import axios from "axios";
import { useDropzone } from "react-dropzone";

export default function Home() {

  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const onDrop = (acceptedFiles) => {
    setFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": []
    },
    maxSize: 2000000
  });

  const handleUpload = async () => {

    if (!file) {
      alert("Please select a file");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {

      await axios.post("/api/upload", formData, {

        headers: {
          "Content-Type": "multipart/form-data"
        },

        onUploadProgress: (progressEvent) => {

          const percent = Math.round(
            (progressEvent.loaded * 100) /
            progressEvent.total
          );

          setProgress(percent);

        }

      });

      alert("File uploaded successfully");

    } catch (error) {

      console.error(error);
      alert("Upload failed");

    }

  };

  return (

    <div style={{ padding: "20px" }}>

      <h1>File Upload App</h1>

      <div
        {...getRootProps()}
        style={{
          border: "2px dashed gray",
          padding: "30px",
          marginBottom: "20px"
        }}
      >

        <input {...getInputProps()} />

        <p>Drag and drop a file here, or click to select file</p>

      </div>

      {file && <p>Selected File: {file.name}</p>}

      <button onClick={handleUpload}>
        Upload File
      </button>

      <p>Upload Progress: {progress}%</p>

    </div>

  );
}