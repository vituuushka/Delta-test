import React, { useState } from "react";
import { Parameter } from "../ParameterList/parameters";
import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";
import s from "./ParameterItem.module.css";
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
  const percent = Math.floor(
    (parameter.currentDay / parameter.yesterday) * 100 - 100
  );
  const chartColor = percent >= 0 ? "green" : "red";
  const bgColor = percent >= 0 ? "rgb(228, 240, 209)" : "rgb(253, 236, 236)";
  return (
    <>
      <tr onClick={() => props.handleRowClick(parameter, props.index)}>
        <td className={s.table_headers}>{parameter.name}</td>
        <td className={s.currentDay}>{parameter.currentDay}</td>
        <td style={{ backgroundColor: bgColor }}>
          <div className={s.subcolumn}>
            <span className={s.number}>{parameter.yesterday}</span>
            <span
              className={`${s.percent} ${
                percent >= 0 ? s.positive : s.negative
              }`}
            >
              {percent}%
            </span>
          </div>
        </td>
        <td
          className={`${s.percent} ${percent >= 0 ? s.positive : s.negative}`}
        >
          {parameter.thisDay}
        </td>
      </tr>
      {props.selectedRowIndex === props.index && props.selectedRow && (
        <tr>
          <td colSpan={4}>
            <HighchartsReact
              highcharts={Highcharts}
              options={{
                title: { text: "" },
                xAxis: {
                  lineWidth: 1,
                  labels: { enabled: false },
                  categories: props.selectedRow.categories,
                  title: { text: "" },
                  gridLineWidth: 0,
                },
                yAxis: {
                  lineWidth: 1,
                  labels: { enabled: false },
                  title: { text: "" },
                  gridLineWidth: 0,
                },
                legend: { enabled: false },
                series: [
                  {
                    type: "line",
                    name: "",
                    data: props.selectedRow.data,
                    showInLegend: false,
                    color: chartColor,
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
