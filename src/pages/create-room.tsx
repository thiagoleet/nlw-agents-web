import { Link } from "react-router-dom";

export function CreateRoomPage() {
  return (
    <div>
      <div>Create Room</div>

      <Link
        className="text-blue-500 hover:underline"
        to="/room"
      >
        Go to Room
      </Link>
    </div>
  );
}
