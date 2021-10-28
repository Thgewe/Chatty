import { Switch, Route } from "react-router-dom";
import React from "react";
import { SCREENS } from "./endpoints";
import { LoginPage } from "../Components/Pages/LoginPage";
import { ChatPage } from "../Components/Pages/ChatPage";

export const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path={SCREENS.SCREEN_LOGIN}>
        <LoginPage />
      </Route>
      <Route path={SCREENS.SCREEN_CHAT}>
        <ChatPage />
      </Route>
    </Switch>
  );
};
