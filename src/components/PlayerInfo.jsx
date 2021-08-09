import React, { useState, useEffect } from "react";
import axios from "axios";
import {Table} from 'react-bootstrap'
import { Link } from "react-router-dom";
import '../App.css'

const PlayerInfo = () => {

    const [playerInfo, setPlayerInfo] = useState([])
    console.log(playerInfo)

    const fetchData = async() => {
        await axios.get("http://localhost:3001/players")
        .then((res) => setPlayerInfo(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="player-info">
            <h2 style={{ textAlign: "center", fontFamily: "cursive", color:"white" }}><b>Players</b></h2>
      <h3 style={{fontFamily: "cursive", color:"yellow"}}>sorted by score</h3>
      <div style={{ overflowY: "scroll", maxHeight: "78vh" }}>
        <Table striped bordered hover variant="dark" size="sm" responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Location</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {playerInfo.sort((a, b) => b.score - a.score).map((player, index) =>
              <tr key={index}>
                <td>{player.name}</td>
                <td>{player.location}</td>
                <td>{player.score}</td>
              </tr>
            )}
          </tbody>
        </Table>
      </div>
      <div style={{display:"flex", justifyContent: "flex-end", padding: "10px"}}>
            <Link exact to={`/playerTable`}>
                <p>Back</p>
            </Link>
            </div>
        </div>
    )
}

export default PlayerInfo;