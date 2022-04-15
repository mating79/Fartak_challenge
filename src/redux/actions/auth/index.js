import { GET_DATA } from "../types";

export const handleConnectSocket = () => {
  return (dispatch) => {
    const socket = new WebSocket("wss://stream.binance.com:9443/ws");
    const msg = {
      method: "SUBSCRIBE",
      params: ["!miniTicker@arr"],
      id: 1,
    };

    socket.onopen = () => {
      socket.send(JSON.stringify(msg));
    };

    socket.onmessage = (evn) => {
      const data = JSON.parse(evn.data);
      if (data.id !== 1) {
        dispatch({
          type: GET_DATA,
          data: data,
        });
      }
    };
  };
};
