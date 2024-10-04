import * as React from "react";

export const EmailTemplate = ({ name, message }) => (
  <div>
    <h1>Message from {name}!</h1>
    <p>{message}!</p>
  </div>
);
