import { useState } from "react";
import { initParameters, Parameter } from "./parameters";
import ParameterItem from "../ParameterItem/ParameterItem";
import s from './ParameterList.module.css'
import classNames from "classnames";

const ParameterList = () => {
  const [parameters, setParameters] = useState<Parameter[]>(initParameters);
  const [selectedRow, setSelectedRow] = useState<{
    title: string;
    categories: string[];
    data: number[];
  } | null>(null);
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null);
  const days = ["Текущий день", "Вчера", "Этот день недели"];
  const handleRowClick = (row: Parameter, index: number) => {
    if (selectedRowIndex === index) {
      setSelectedRowIndex(null);
      setSelectedRow(null);
    } else {
      setSelectedRowIndex(index);
      setSelectedRow({
        title: `${row.name}`,
        categories: days,
        data: [row.currentDay, row.yesterday, row.thisDay],
      });
    }
  };

  return (
    <div>
      <table className={classNames("table",s.table)}>
        <thead className={s.table_headers}>
          <tr>
            <th scope="col">Показатель</th>
            <th scope="col" className={s.currentDay}>Текущий день</th>
            <th scope="col">Вчера</th>
            <th scope="col">Этот день недели</th>
          </tr>
        </thead>
        <tbody>
          {parameters.map((param, index) => {
            return (
              <ParameterItem
                selectedRowIndex={selectedRowIndex}
                selectedRow={selectedRow}
                handleRowClick={handleRowClick}
                parameter={param}
                key={index}
                index={index}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ParameterList;
