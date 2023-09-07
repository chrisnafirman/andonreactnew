import React, { useEffect, useRef, useState } from "react";
import QrScanner from "qr-scanner";

const QR = ({ onClose, onScanSuccess }) => {
  const videoRef = useRef(null);
  const [scannedData, setScannedData] = useState("");
  const [flashOn, setFlashOn] = useState(false);

  useEffect(() => {
    let stopScan = false;

    const scanNow = async () => {
      stopScan = false;
      await new Promise((r) => setTimeout(r, 100));
      const scanner = new QrScanner(
        videoRef.current,
        (result) => {
          setScannedData(result.data);
          stopScan = true;
          onScanSuccess(result.data); // Send the result back to the parent component
        },
        {
          onDecodeError: (error) => {
            console.error(error);  
          },
          maxScansPerSecond: 1,
          highlightScanRegion: true,
          highlightCodeOutline: true,
          returnDetailedScanResult: true,
        }
      );
      await scanner.start();
      while (stopScan === false) await new Promise((r) => setTimeout(r, 100));
      scanner.stop();
      scanner.destroy();
    };

    scanNow();

    return () => {
      stopScan = true;
    };
  }, [onScanSuccess]);

  const handleFlashToggle = () => {
    setFlashOn((prevFlash) => !prevFlash);
    if (videoRef.current) {
      videoRef.current.srcObject.getVideoTracks().forEach((track) => {
        track.enabled = !flashOn;
      });
    }
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      QrScanner.scanImage(e.target.result)
        .then((result) => {
          if (result) {
            setScannedData(result);
            onScanSuccess(result);
          } else {
            alert("Tidak dapat menemukan kode QR dalam gambar.");
          }
        })
        .catch((err) => {
          console.error(err);
          alert("Terjadi kesalahan saat memindai gambar.");
        });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
      <div className="w-[400px] p-4 mb-20 ">
        <video ref={videoRef} className="w-full rounded-2xl border-dotted mb-2" autoPlay muted playsInline></video>
         <div className="text-center absolute inset-0 flex items-center justify-center">
          <span className="text-white text-1xl font-extralight mt-64 w-56 h-3 tracking-wide">Astra Visteon Integrated QR</span>
        </div>
        <div className="flex justify-center absolute items-center ml-14 mx-auto mb-4">
        <button
            className= "px-4 py-2 bg-black text-white  rounded-xl hover:bg-gray-600 "
            onClick={onClose}
          >
            <svg width="30px" viewBox="0 0 1024 1024">
              <path fill="#F7F7F7" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" />
              <path fill="#F7F7F7" d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z" />
            </svg>
          </button>
          <button
            className="px-4 py-2 space-x-3 ml-4 black bg-black  text-white rounded-xl hover:bg-gray-600"
            onClick={handleFlashToggle}
          >
            <svg fill="#F7F7F7" width="30px" viewBox="0 0 24 24" preserveAspectRatio="xMinYMin" class="jam jam-flashlight-on">
              <path d='M13.24 13.12l.381.02a.992.992 0 0 0 .764-.29l2.121-2.122-3.535-3.536-2.122 2.122a.992.992 0 0 0-.291.763l.021.38 2.662 2.662zm-1.684 1.143l-2.121-2.12-7.071 7.07a1 1 0 0 0 0 1.414l.707.708a1 1 0 0 0 1.414 0l7.071-7.072zM9.435 7.9l2.121-2.12a2 2 0 0 1 2.829 0l3.535 3.535a2 2 0 0 1 0 2.828l-2.12 2.12a2.993 2.993 0 0 1-2.288.875L5.9 22.748a3 3 0 0 1-4.242 0l-.707-.706a3 3 0 0 1 0-4.243l7.611-7.611a2.993 2.993 0 0 1 .874-2.289zm8.485 0a1 1 0 0 1 0-1.414l2.122-2.121a1 1 0 1 1 1.414 1.414L19.335 7.9a1 1 0 0 1-1.415 0zm1.863 1.674a1 1 0 0 1 .707-1.225l1.932-.518a1 1 0 1 1 .517 1.932l-1.931.518a1 1 0 0 1-1.225-.707zm-3.984-3.795a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 0 1 1.415 1.414l-2.122 2.121a1 1 0 0 1-1.414 0zm-1.673-1.862a1 1 0 0 1-.707-1.225L13.936.76a1 1 0 1 1 1.932.518l-.517 1.932a1 1 0 0 1-1.225.707z' />
            </svg>
          </button>
          <label htmlFor="qr-image" className="ml-4 cursor-pointer px-4 py-2 bg-black  text-white rounded-xl ">
            Upload QR
          </label>
        </div>
        <div className="text-center">
          {/* Add scanned data display here */}
          {scannedData && <p className="mb-2">Scanned Data: {scannedData}</p>}
        </div>
        {/* <button className="mt-4 px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600" onClick={onClose}>
          Close
        </button> */}
      </div>
    </div>
  );
};

export default QR;
