import React, { useState } from "react";
import "./App.css";

function App() {
  const [videoURL, setVideoURL] = useState("");
  const [downloadType, setDownloadType] = useState("mp4");
  const [videoQuality, setVideoQuality] = useState("720p");

  const handleDownload = () => {
    if (!videoURL) {
      alert("Please enter a valid URL.");
      return;
    }
    console.log(`Downloading ${downloadType} in ${videoQuality} from:`, videoURL);
    // API call logic goes here
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Video Downloader</h1>

        {/* Input for Video URL */}
        <input
          type="text"
          placeholder="Enter video URL"
          value={videoURL}
          onChange={(e) => setVideoURL(e.target.value)}
          style={{ width: "80%", padding: "10px", marginBottom: "10px" }}
        />

        {/* Dropdown for Download Type */}
        <select
          value={downloadType}
          onChange={(e) => setDownloadType(e.target.value)}
          style={{ width: "80%", padding: "10px", marginBottom: "10px" }}
        >
          <option value="mp4">Download MP4</option>
          <option value="mp3">Download MP3</option>
        </select>

        {/* Dropdown for Video Quality */}
        {downloadType === "mp4" && (
          <select
            value={videoQuality}
            onChange={(e) => setVideoQuality(e.target.value)}
            style={{ width: "80%", padding: "10px", marginBottom: "10px" }}
          >
            <option value="360p">360p</option>
            <option value="720p">720p</option>
            <option value="1080p">1080p</option>
          </select>
        )}

        {/* Download Button */}
        <button onClick={handleDownload} style={{ padding: "10px 20px", marginTop: "10px" }}>
          Download
        </button>
      </header>
    </div>
  );
}

export default App;
