import { useState } from "react";
import { initParameters, Parameter } from "./parameters";
import ParameterItem from "../ParameterItem/ParameterItem";
import HighchartsReact from "highcharts-react-official";
import Highcharts, { Options } from "highcharts";

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
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Показатель</th>
            <th scope="col">Текущий день</th>
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
