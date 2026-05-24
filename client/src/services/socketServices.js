import { io } from "socket.io-client";

const SOCKET_URL = "http://localhost:5000";

let socket;

export const connectSocket = () => {
  socket = io(SOCKET_URL, {
    transports: ["websocket"],
  });

  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) socket.disconnect();
};