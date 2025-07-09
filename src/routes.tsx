import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoomPage } from "./pages/create-room";
import { RecordRoomAudioPage } from "./pages/record-room-audio";
import { RoomPage } from "./pages/room";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<CreateRoomPage />}
          index
        />
        <Route
          element={<RoomPage />}
          path="/room/:roomId"
        />
        <Route
          element={<RecordRoomAudioPage />}
          path="/room/:roomId/audio"
        />

        <Route
          element={<div>404 - Página não encontrada</div>}
          path="*"
        />
      </Routes>
    </BrowserRouter>
  );
}
