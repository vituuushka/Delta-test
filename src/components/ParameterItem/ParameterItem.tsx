import React from "react";
import { Parameter } from "../ParameterList/parameters";
import Highcharts, { Options } from "highcharts";
import HighchartsReact from "highcharts-react-official";

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
  return (
    <>
      <tr onClick={() => props.handleRowClick(parameter, props.index)}>
        <td>{parameter.name}</td>
        <td>{parameter.currentDay}</td>
        <td>{parameter.yesterday}</td>
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
