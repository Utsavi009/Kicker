import axios from "axios";

export const addPlayer = (newPlayer) => {
  return axios
    .post("http://localhost:3001/players", newPlayer)
    .then((res) => {
      console.log("Player has been added");
    });
};