import React from "react";

const Table = ({ netIncomes }) => {
  // Calcular el promedio de ingreso neto utilizando reduce
  const totalIncome = netIncomes.reduce(
    (total, incomeObj) => total + incomeObj.income,
    0
  );
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Nombre de Marca</th>
            <th>Ingreso Neto</th>
          </tr>
        </thead>
        <tbody>
          {netIncomes.map((incomeObj, index) => (
            <tr key={index}>
              <td>{incomeObj.brand}</td>
              <td>{incomeObj.income}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>Promedio de Ingreso Neto: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default Table;
