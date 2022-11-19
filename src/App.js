import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="React weather app">
      <div className="container">
        <Weather defaultCity="Copenhagen" />
        <footer>
          This project is coded by{" "}
          <a
            href="https://www.linkedin.com/in/aleksandra-ziabrikova-19514a65/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aleksandra Ziabrikova
          </a>{" "}
          and is available at{" "}
          <a
            href="https://github.com/AleksandraZiabrikova/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
