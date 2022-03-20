import React from "react";

import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

import PageWrap from "./PageWrap";
import UserList from "../components/UserList";

import authHeader from "../util/auth";
import TextField from "@mui/material/TextField";

const api = "http://localhost:8080";

export default function AdminPage() {
  const [users, setUsers] = React.useState([]);
  const [open, setOpen] = React.useState(false);

  const [username, setUsername] = React.useState();
  const [name, setName] = React.useState();
  const [surname, setSurname] = React.useState();
  const [position, setPosition] = React.useState();
  const [password, setPassword] = React.useState();

  React.useEffect(() => {
    fetchUsers();
    // users = users.filter(user => user.username != "admin")
    // setUsers(users)
  }, []);

  function fetchUsers() {
    fetch(api + "/users", {
      method: "GET",
      headers: {
        Authorization: authHeader(),
        "Content-Type": "application/json",
      },
    }).then((r) => r.json().then((data) => setUsers(data)));
  }

  function deleteUser(id) {
    fetch(api + `/users/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: authHeader(),
        "Content-Type": "application/json",
      },
    }).then((r) => r.json().then((data) => console.log(data)));
    setUsers(users.filter((user) => user.id !== id));
  }

  function addUser() {
    const user = {
      name: name,
      surname: surname,
      username: username,
      password: password,
      position: position,
    };
    fetch(api + `/users/auth/register`, {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        Authorization: authHeader(),
        "Content-Type": "application/json",
      },
    }).then((r) => r.json().then((data) => console.log(data)));
    setOpen(false);
    fetchUsers();
  }

  return (
    <>
      <PageWrap show={false}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "20%",
              maxHeight: "60%",
              padding: "20px",
              overflow: "auto",
              background: "#414141",
            }}
          >
            <UserList deleteUser={deleteUser} users={users} deleteUsers />
            <Button onClick={() => setOpen(true)}>Add</Button>
          </div>
        </div>
      </PageWrap>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add user</DialogTitle>
        <DialogContent
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            label="Name"
            variant="outlined"
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            label="Surname"
            variant="outlined"
            onChange={(e) => setSurname(e.target.value)}
          />
          <TextField
            label="Position"
            variant="outlined"
            onChange={(e) => setPosition(e.target.value)}
          />
          <TextField
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <Button onClick={() => addUser()}>ADD</Button>
            <Button onClick={() => setOpen(false)}>Cancel</Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
