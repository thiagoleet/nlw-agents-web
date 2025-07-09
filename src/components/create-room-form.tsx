export function CreateRoomForm() {
  return (
    <form className="flex flex-col gap-4">
      <label
        className="font-medium text-sm"
        htmlFor="roomName"
      >
        Room Name
      </label>
      <input
        className="input"
        id="roomName"
        placeholder="Enter room name"
        type="text"
      />
      <button
        className="btn"
        type="submit"
      >
        Create Room
      </button>
    </form>
  );
}
