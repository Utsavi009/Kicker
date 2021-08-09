import {Card, Form, Button } from "react-bootstrap";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {addPlayer} from "../api"
import queryString from "query-string";

const Home = () => {

    let history = useHistory();

  const [player, setPlayer] = useState({
    name: "",
    location: ""
  })

  console.log(player)

  const onChange = (e) => {
    let keyName = e.target.name;
    let value = e.target.value;
    setPlayer((previous) => {
      return {
        ...previous,
        [keyName]: value,
      };
    });
  };

  const onSubmit = (e) => {
    e.preventDefault()

    const newPlayer = {
      name: player.name,
      location: player.location
    }

    addPlayer(queryString.stringify(newPlayer)).then((res) => {
      history.push(`/playerTable`);
    });
  }

    return(
        <div className="App">
          <h1>Welcome to kicker</h1>
          <div style={{ display: "flex", justifyContent: "center", width: "100%", padding: "10px"}}>
          <Card bg="light" style={{ flexGrow: "1", maxWidth: "30rem", height: "fit-content", textAlign: "left" }}>
          <Card.Body>
            <Form onSubmit={onSubmit}>
  <Form.Group className="mb-3">
    <Form.Label>Name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" name="name" value={player.name} onChange = {onChange} required/>
  </Form.Group>

  <Form.Group className="mb-3">
    <Form.Label>Location</Form.Label>
    <Form.Control
            as="select"
            className="my-1 mr-sm-2"
            id="inlineFormCustomSelectPref"
            name="location"
            value={player.location}
            onChange = {onChange}
            custom
          >
            <option value="">Select</option>
            <option value="München">München</option>
            <option value="Berlin">Berlin</option>
            <option value="Würzburg">Würzburg</option>
          </Form.Control>
  </Form.Group>
  <Button variant="primary" type="submit">
    Join Table
  </Button>
</Form>
</Card.Body>
</Card>
          </div>
        </div>
    )
}

export default Home;