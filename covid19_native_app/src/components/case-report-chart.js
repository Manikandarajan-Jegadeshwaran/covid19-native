import React, { useState } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-paper";

import {
  StackedAreaChart,
  LineChart,
  BarChart,
  XAxis
} from "react-native-svg-charts";
import * as Shape from "d3-shape";

function CaseReportChart(props) {
  const { caseSeries, type, title, caseName, color } = props;

  let totalData = [];
  let dailyData = [];
  if (caseSeries.length > 0) {
    caseSeries.forEach(each => {
      totalData.push({
        confirmed: each.totalconfirmed,
        active:
          Number(each?.totalconfirmed ?? 0) -
          (Number(each?.totalrecovered ?? 0) +
            Number(each?.totaldeceased ?? 0)),
        recovered: each.totalrecovered,
        deceased: each.totaldeceased,
        date: new Date(each.date)
      });
      dailyData.push({
        confirmed: each.dailyconfirmed,
        active:
          Number(each?.dailyconfirmed ?? 0) -
          (Number(each?.dailyrecovered ?? 0) +
            Number(each?.dailydeceased ?? 0)),
        recovered: each.dailyrecovered,
        deceased: each.dailydeceased,
        date: new Date(each.date)
      });
    });
  }

  function getData() {
    const source = type === "total" ? totalData : dailyData;
    return [
      ...source.map(each => {
        try {
          if (each[caseName]) {
            return Number(each[caseName]);
          } else {
            return 0;
          }
        } catch {
          return 0;
        }
      })
    ];
  }

  return (
    <Card
      style={{ marginRight: 20, marginTop: 10, backgroundColor: "#ffffff3c" }}
    >
      <Card.Title title={title} />
      <Card.Content>
        <LineChart
          data={getData()}
          style={{ width: "100%", height: 200 }}
          svg={{ stroke: color, strokeWidth: 3 }}
          contentInset={{ top: 20, bottom: 20 }}
        />
      </Card.Content>
    </Card>
  );
}

export default CaseReportChart;
