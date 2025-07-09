import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type GetRoomsApiResponse = Array<{
  id: string;
  name: string;
}>;

export function CreateRoomPage() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3333/rooms");
      const result: GetRoomsApiResponse = await response.json();

      return result;
    },
  });

  return (
    <div>
      <div>Create Room</div>

      {isLoading && <div>Loading...</div>}

      <ul>
        {data?.map((room) => {
          return <li key={room.id}>{room.name}</li>;
        })}
      </ul>

      <Link
        className="text-blue-500 hover:underline"
        to="/room"
      >
        Go to Room
      </Link>
    </div>
  );
}
