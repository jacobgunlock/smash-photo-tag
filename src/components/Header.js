import React from "react";

export const Header = (props) => {
  const { isMagnified, setIsMagnified, characters, timer } = props;  
  const btnStyle = {
    backgroundImage: isMagnified
      ? `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath d='M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM184 296c0 13.3 10.7 24 24 24s24-10.7 24-24V232h64c13.3 0 24-10.7 24-24s-10.7-24-24-24H232V120c0-13.3-10.7-24-24-24s-24 10.7-24 24v64H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z' fill='black'/%3E%3C/svg%3E")`
      : `url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"%3E%3Cpath d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM136 184c-13.3 0-24 10.7-24 24s10.7 24 24 24H280c13.3 0 24-10.7 24-24s-10.7-24-24-24H136z"%3E%3C/path%3E%3C/svg%3E')`,
  };
  return (
    <div className="header">
      <h2>Smash Bros Photo Tag</h2>
      <p>{(timer.ms / 10).toFixed(1)}s</p>
      <div>
        <h3>Search for:</h3>
        <ul>
          {characters.map((item) => {
            return (
              <li
                key={item.name}
                style={item.found ? { color: "green" } : null}
              >
                {item.name}
              </li>
            );
          })}
        </ul>
      </div>
      <button
        className="mag-glass"
        style={btnStyle}
        onClick={() => setIsMagnified(!isMagnified)}
      ></button>
    </div>
  );
};
