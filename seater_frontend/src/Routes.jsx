import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import FloorPage from "./pages/FloorPage";
import ProfilePage from "./pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import RoomPage from "./pages/RoomPage";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/floor">
          <FloorPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route path="/room">
          <RoomPage />
        </Route>
      </Switch>
    </Router>
  );
}
