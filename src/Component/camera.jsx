import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import Webcam from "react-webcam";

const WebcamComponent = () => {
    const webcamRef = useRef(null);
    const [isCameraOn, setIsCameraOn] = useState(true);

    const handleToggleCamera = () => {
        setIsCameraOn((prev) => !prev);
    };

    return (
        <div>
            <Webcam
                audio={false}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                style={{
                    width: "auto",
                    height: "200px",
                    borderRadius: "20%",
                    overflow: "hidden",
                    marginBottom: "20px",
                    marginTop: "50px",
                }}
                videoConstraints={{
                    facingMode: isCameraOn ? "user" : "environment",
                }}
            />
            <div className="mt-2">
                <Button onClick={handleToggleCamera}>
                    {isCameraOn ? "Turn Off Camera" : "Turn On Camera"}
                </Button>
            </div>
        </div>
    );
};

export default WebcamComponent;
