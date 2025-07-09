import { Navigate, useParams } from "react-router-dom";

type RoomParams = {
  roomId: string;
};

export function RoomPage() {
  const params = useParams<RoomParams>();

  if (!params.roomId) {
    return (
      <Navigate
        replace
        to="/"
      />
    );
  }

  return <div>Room Details: {params.roomId}</div>;
}
