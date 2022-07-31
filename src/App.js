import QRCode from "qrcode";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrCode] = useState("");

  const GenerateQRCode = () => {
    QRCode.toDataURL(
      url,
      {
        width: 800,
        margin: 2,
        color: {
          dark: "#000",
          light: "#fff",
        },
      },
      (err, url) => {
        if (err) return console.error(err);
        console.log(url);
        setQrCode(url);
      }
    );
  };
  return (
    <>
      <div className="app">
        <h1>QR Generator</h1>
        <input
          type="text"
          placeholder="e.g https://www.9trcoder.com"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button onClick={GenerateQRCode}>Generate</button>
        {qrCode && (
          <>
            <img src={qrCode} alt="" />

            <a href={qrCode} download="qrcode.png">
              Download
            </a>
          </>
        )}
      </div>
    </>
  );
}

export default App;
