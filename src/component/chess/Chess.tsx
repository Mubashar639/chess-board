import React from "react";
import { chessCol, chessRow } from "../../constant/Constant";
import "./Chess.css";

export default function Chess() {
  return (
    <div>
      <table className="table_bar">
        {chessRow.map((row: number) => {
          return (
            <tr key={row}>
              {chessCol.map((col: number, index: number) => {
                return (
                  <td
                    key={col}
                    className={
                      Boolean(
                        row % 2 === 0
                          ? Boolean(col % 2 === 1)
                          : !Boolean(col % 2 === 1),
                      )
                        ? "black"
                        : "white"
                    }
                  ></td>
                );
              })}
            </tr>
          );
        })}
      </table>
    </div>
  );
}
