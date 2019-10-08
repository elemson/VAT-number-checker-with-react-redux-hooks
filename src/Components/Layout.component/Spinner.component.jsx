import React from "react";
import spinner from "./Spinner.gif";

export default function Spinner() {
  return (
    <img
      src={spinner}
      alt="loading..."
      styles={{ width: "200px", margin: "40px auto", display: "block" }}
    />
  );
}
