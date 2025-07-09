import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CreateRoomPage } from "./pages/create-room";
import { RoomPage } from "./pages/room";

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={<CreateRoomPage />}
          index
        />
        <Route
          element={<RoomPage />}
          path="/room"
        />
      </Routes>
    </BrowserRouter>
  );
}
