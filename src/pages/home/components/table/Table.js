import { faSadTear } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import cssStyles from "./table.module.css";

function Table(props) {
  return (
    <div className={cssStyles.container}>
      <div className={cssStyles.headerContainer}>

        <h1 className={cssStyles.title}>{props.title}</h1>
      </div>
      <div className={cssStyles.tableContainer}>
      <table className={cssStyles.table} >
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
          {props.body ? (
            props.body.map((item, index) => {
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
                <tr
                  key={index}
                  className={`${cssStyles.rowsContainer} ${rowBg}`}
                >
                  {items}
                </tr>
              );
            })
          ) : (
            <div className={cssStyles.noDataContainer}>
              <FontAwesomeIcon icon={faSadTear} className={cssStyles.noDataIcon} />
              <span>Sorry! There's no data to be shown.</span>
            </div>
          )}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default Table;
