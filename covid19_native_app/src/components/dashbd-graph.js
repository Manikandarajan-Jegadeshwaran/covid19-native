import React from "react";
import { View } from "react-native";

import {
  StackedAreaChart,
  LineChart,
  BarChart,
  XAxis
} from "react-native-svg-charts";
import * as Shape from "d3-shape";

function getValueArr(arr, key) {
  return [
    ...arr.map(each => {
      try {
        if (each[key]) {
          return Number(each[key]);
        } else {
          return 0;
        }
      } catch {
        return 0;
      }
    })
  ];
}

function Graph(props) {
  const { caseSeries, confirmed, active, recovered, deaths } = props;

  let totalData = [];
  let dailyData = [];
  if (caseSeries.length > 0) {
    caseSeries.forEach(each => {
      totalData.push({
        confirmed: each.totalconfirmed,
        recovered: each.totalrecovered,
        deceased: each.totaldeceased,
        date: new Date(each.date)
      });
      dailyData.push({
        confirmed: each.dailyconfirmed,
        recovered: each.dailyrecovered,
        deceased: each.dailydeceased,
        date: new Date(each.date)
      });
    });
  }

  const data = [
    Number(confirmed),
    Number(active),
    Number(recovered),
    Number(deaths)
  ];
  const label = ["Confm", "Active", "Recvd", "Death"];

  console.log('barchart',data)

  if(isNaN(data[0])){
      console.log('am nan')
      return null
  }

  return (
    <View
      style={{
        width: "100%",
        height:150,
        justifyContent: "center",
        alignItems: "center",
        marginTop:30,
        marginBottom: 20
      }}
    >
      <BarChart
        style={{ width: "50%", height: 150 }}
        data={data}
        svg={{ fill: "#007bff" }}
        contentInset={{ top: 10, bottom: 10 }}
      />
      <XAxis
        style={{ width: "50%" }}
        data={data}
        formatLabel={(value, index) => label[index]}
        contentInset={{ left: 20, right: 20 }}
        svg={{ fontSize: 10, fill: "black" }}
      />
      <XAxis
        style={{ width: "50%", marginBottom: 10 }}
        data={data}
        formatLabel={(value, index) => `(${data[index]})`}
        contentInset={{ left: 20, right: 20 }}
        svg={{ fontSize: 10, fill: "black" }}
      />
    </View>
  );
}

export default Graph;
