import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const isRecordingSupported =
  !!navigator.mediaDevices &&
  typeof navigator.mediaDevices.getUserMedia === "function" &&
  typeof window.MediaRecorder === "function";

type RecordRoomAudioPageParams = {
  roomId: string;
};

export function RecordRoomAudioPage() {
  const [isRecording, setIsRecording] = useState(false);
  const recorderRef = useRef<MediaRecorder | null>(null);
  const params = useParams<RecordRoomAudioPageParams>();

  async function updloadAudio(blob: Blob) {
    const formData = new FormData();
    formData.append("file", blob, "recording.webm");

    const response = await fetch(
      `http://localhost:3333/rooms/${params.roomId}/audio`,
      {
        method: "POST",
        body: formData,
      }
    );

    const result = await response.json();
  }

  function stopRecording() {
    setIsRecording(false);

    if (recorderRef.current && recorderRef.current.state !== "inactive") {
      recorderRef.current.stop();
    }
  }

  async function startRecording() {
    if (!isRecordingSupported) {
      alert("Gravação de áudio não é suportada neste navegador.");
      return;
    }

    setIsRecording(true);

    const audio = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44_100,
      },
    });

    recorderRef.current = new MediaRecorder(audio, {
      mimeType: "audio/webm",
      audioBitsPerSecond: 64_000,
    });

    recorderRef.current.ondataavailable = (event) => {
      if (event.data.size > 0) {
        console.log("Gravação concluída:", event.data);
        updloadAudio(event.data);
      }
    };

    recorderRef.current.onstart = () => {
      console.log("Gravação iniciada");
    };

    recorderRef.current.onstop = () => {
      console.log("Gravação parada");
    };

    recorderRef.current.start();
  }

  if (!params.roomId) {
    return (
      <Navigate
        replace
        to="/"
      />
    );
  }

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-3">
      {!isRecording && (
        <>
          <Button
            className="cursor-pointer"
            onClick={startRecording}
          >
            Gravar Áudio
          </Button>
          <p>Pausado</p>
        </>
      )}

      {isRecording && (
        <>
          <Button
            className="cursor-pointer"
            onClick={stopRecording}
          >
            Parar Gravação
          </Button>
          <p>Gravando...</p>
        </>
      )}
    </div>
  );
}
