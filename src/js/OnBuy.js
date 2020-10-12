import React, { useEffect, useState } from "react";
import { HashRouter, Route, Link, Switch, NavLink } from "react-router-dom";
const OnBuy = () => {
  const API = "http://localhost:8000/basket";

  useEffect(() => {
    fetch(`${API}`, {
      method: "DELETE",
    })
      .then((response) => {
        console.log(response.ok);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("kasuję");
  }, []);
  return (
    <>
      <h1>
        Brawo ! udało Ci się dokonać zakupu w naszym sklepie. Oczekuj na
        wiadomość od nas, kiedy towar będzie dostępny do odbioru w wybranej
        placówce.
      </h1>
      <Link to="/">
        Powrót do sklepu<i class="fas fa-arrow-circle-right"></i>
      </Link>
    </>
  );
};
export default OnBuy;