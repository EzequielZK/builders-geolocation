import React from "react";
import cssStyles from "./table.module.css";

function Table(props) {
  return (
    <div className={cssStyles.container}>
      <div className={cssStyles.headerContainer}>
        <img alt="weather-icon" src={props.titleIcon} />
        <h1>Florianópolis, Santa Catarina</h1>
      </div>
      <table className={cssStyles.table}>
        <thead>
          <tr className={cssStyles.rowsContainer}>
            {props.headers.map((item, index) => (
              <th key={index}>
                <span>{item}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr className={cssStyles.rowsContainer}>
            {props.body.map((item, index) => {
              let key;
              const items = [];

              for (key in item) {
                items.push(
                  <td key={key}>
                    <span>{item[key]}</span>
                  </td>
                );
              }
         
              return items;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
