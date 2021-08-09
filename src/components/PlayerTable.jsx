import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import {Card, Form, Button } from "react-bootstrap";

const PlayerTable = () => {

    const [playerInfo, setPlayerInfo] = useState([])
    console.log(playerInfo)
    const [playerOne, setPlayerOne] = useState(0)
    const [playerTwo, setPlayerTwo] = useState(0)
    console.log(playerOne)
    console.log(playerTwo)

    const fetchData = async() => {
        await axios.get("http://localhost:3001/players")
        .then((res) => setPlayerInfo(res.data))
        .catch(err => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])

    const result = (e) => {
        e.preventDefault(e)
        if(playerOne > playerTwo) {
            alert("Player-1 won")
        } else {
            alert("Player-2 won")
        }
    }

    const playerOneAttack = (num) => {
        let randomNum = Math.floor(Math.random() * 10)
        setPlayerOne(playerOne + num)
        /* setPlayerTwo(playerTwo + randomNum ) */
    }

    return (
        <div style={{display: "flex", justifyContent: "center", flexDirection: "column"}}>
            <div style={{display:"flex", justifyContent: "flex-end", padding: "10px"}}>
            <Link exact to={`/playerInfo`}>
                <p>Players Info</p>
            </Link>
            </div>
            <div style={{display: "flex", justifyContent: "center", flexDirection: "row"}}>
                <div>
                    <Form>
                    <Form.Group className="mb-3">
    <Form.Label><b>Select Player1</b></Form.Label>
    <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            value={playerOne}
            onChange={(e) => setPlayerOne(e.target.value)}
            custom
          >
            <option value="">Select Player</option>
            {playerInfo &&
                playerInfo.map((player, playerIndex) => {
                  return (
                    <option value={player.score} key={playerIndex}>
                      {player.name}
                    </option>
                  );
                })}
          </Form.Control>
  </Form.Group>
  <Button variant="primary" type="button" onClick={() => playerOneAttack(2)}>
                    Attack
                </Button>
                    </Form>
                </div>
                
                <div>
                    <Form>
                    <Form.Group className="mb-3">
    <Form.Label><b>Select Player2</b></Form.Label>
    <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            value={playerTwo.score}
            onChange={(e) => setPlayerTwo(e.target.value)}
            custom
          >
            <option value="">Select Player</option>
            {playerInfo &&
                playerInfo.map((player, playerIndex) => {
                  return (
                    <option value={player.score} key={playerIndex}>
                      {player.name}
                    </option>
                  );
                })}
          </Form.Control>
  </Form.Group>
                    </Form>
                </div>
            
            </div>

            <div>
                <Button variant="primary" type="button" onClick={result}>
                    Result
                </Button>
                </div>

            <div style={{display:"flex", justifyContent: "flex-end", padding: "10px"}}>
            <Link exact to={`/`}>
                <p>Back</p>
            </Link>
            </div>
        </div>

        
    )
}

export default PlayerTable;