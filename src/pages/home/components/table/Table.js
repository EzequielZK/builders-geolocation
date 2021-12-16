import React from "react";
import cssStyles from "./table.module.css";

function Table(props) {
  return (
    <div className={cssStyles.container}>
      <div className={cssStyles.headerContainer}>
        {props.titleIcon ? (
          <img alt="weather-icon" src={props.titleIcon} />
        ) : null}

        <h1 className={cssStyles.title}>{props.title}</h1>
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
          {props.body.map((item, index) => {
            let key;
            const items = [];
            const rowBg = index % 2 === 0 ? cssStyles.rowBg : "";
            for (key in item) {
              items.push(
                <td key={key}>
                  <span>{item[key]}</span>
                </td>
              );
            }

            return (
              <tr key={index} className={`${cssStyles.rowsContainer} ${rowBg}`}>
                {items}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
