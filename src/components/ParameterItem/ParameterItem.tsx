import React from "react";
import { Parameter } from "../ParameterList/parameters";
import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import s from "./ParameterItem.module.css"
import classNames from "classnames";

type ParameterItemProps = {
  parameter: Parameter;
  handleRowClick: (row: Parameter, index: number) => void;
  selectedRow: {
    title: string;
    categories: string[];
    data: number[];
  } | null;
  index: number;
  selectedRowIndex: number | null;
};
const ParameterItem = (props: ParameterItemProps) => {
  const parameter = props.parameter;
  const percent = Math.floor(((parameter.currentDay/parameter.yesterday)*100)-100)
  return (
    <>
      <tr onClick={() => props.handleRowClick(parameter, props.index)}>
        <td className={s.table_headers}>{parameter.name}</td>
        <td className={s.currentDay} >{parameter.currentDay}</td>
        <td>
          <div className={s.subcolumn}>
            <span className={s.number}>{parameter.yesterday}</span>
            <span className={`${s.percent} ${percent >= 0 ? s.positive : s.negative}`}>{percent}%</span>
          </div>
          </td>
        <td>{parameter.thisDay}</td>
      </tr>
      {props.selectedRowIndex === props.index && props.selectedRow && (
        <tr>
          <td colSpan={4}>
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                title: { text: props.selectedRow.title },
                xAxis: { categories: props.selectedRow.categories },
                series: [
                  {
                    type: "line",
                    name: props.selectedRow.title,
                    data: props.selectedRow.data,
                  },
                ],
              }}
            />
          </td>
        </tr>
      )}
    </>
  );
};

export default ParameterItem;
