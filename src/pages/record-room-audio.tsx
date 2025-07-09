import { useState } from "react";
import { Button } from "@/components/ui/button";

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === "function" &&
  typeof window.MediaRecorder === "function";

export function RecordRoomAudioPage() {
  const [isRecording, setIsRecording] = useState(false);

  function startRecording() {
    if (!isRecordingSupported) {
      alert("Gravação de áudio não é suportada neste navegador.");
      return;
    }
    setIsRecording(true);
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      <Button
        className="cursor-pointer"
        onClick={startRecording}
      >
        Gravar Áudio
      </Button>
      {isRecording && <p>Gravando...</p>}
      {!isRecording && <p>Pausado</p>}
    </div>
  );
}
