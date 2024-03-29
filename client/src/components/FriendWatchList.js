import React from "react";
//import "../styles/style.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import NavTab from "./Navbar";
import Container from "./Container";
import Footer from "./Footer";

function FriendWatchList() {
  return (
    <Container>
      <NavTab />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Movie Name</th>
            <th>Genre</th>
            <th>Score</th>
            <th>My Rating</th>
            <th>Add to my WatchList</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Movie Name 1</td>
            <td>Genre 1</td>
            <td>Score 1</td>
            <td>My Rating 1</td>
            <td>
              <Button variant="info">Add</Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Movie Name 2</td>
            <td>Genre 2</td>
            <td>Score 2</td>
            <td>My Rating 2</td>
            <td>
              <Button variant="info">Add</Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Movie Name 3</td>
            <td>Genre 3</td>
            <td>Score 3</td>
            <td>My Rating 3</td>
            <td>
              <Button variant="info">Add</Button>
            </td>
          </tr>
        </tbody>
      </Table>
      <Footer />
    </Container>
  );
}
export default FriendWatchList;
