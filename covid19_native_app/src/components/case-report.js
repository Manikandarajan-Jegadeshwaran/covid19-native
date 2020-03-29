import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Wrapper from "./wrapper";
import CaseReportChart from "./case-report-chart";

function CaseReport(props) {
  const { route } = props;
  const { option } = route?.params;
  const { name, delta, count, caseSeries } = option;
  return (
    <Wrapper>
      <View style={styles.container}>
        {name.toLowerCase() === "confirmed" && (
          <View style={styles.fullWidth}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.totalCount}>Till now </Text>
              <Text style={styles.number}>{count}</Text>
              <Text style={styles.totalCount}> cases has been confirmed </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.number}>{delta}</Text>
              <Text style={styles.totalCount}> new Cases </Text>
            </View>
            <View>
              <CaseReportChart
                caseSeries={caseSeries}
                caseName='confirmed'
                type='total'
                title='Total Cases'
                color='#ff073a'
              />
            </View>
            <View>
              <CaseReportChart
                caseSeries={caseSeries}
                caseName='confirmed'
                type='daily'
                title='Daily Cases'
                color='#ff073a'
              />
            </View>
          </View>
        )}

        {name.toLowerCase() === "active" && (
          <View style={styles.fullWidth}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.totalCount}>Till now </Text>
              <Text style={styles.number}>{count}</Text>
              <Text style={styles.totalCount}> cases confirmed as active</Text>
            </View>
            <View>
              <CaseReportChart
                caseSeries={caseSeries}
                caseName='active'
                type='total'
                title='Total Cases'
                color='#007bff'
              />
            </View>
            <View>
              <CaseReportChart
                caseSeries={caseSeries}
                caseName='active'
                type='daily'
                title='Daily Cases'
                color='#007bff'
                F
              />
            </View>
          </View>
        )}

        {name.toLowerCase() === "recovered" && (
          <View style={styles.fullWidth}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.totalCount}>Till now </Text>
              <Text style={styles.number}>{count}</Text>
              <Text style={styles.totalCount}> cases has been recovered </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.number}>{delta}</Text>
              <Text style={styles.totalCount}>{`${
                delta > 1 ? " cases" : " case"
              } recovered today`}</Text>
            </View>

            <View>
              <CaseReportChart
                caseSeries={caseSeries}
                caseName='recovered'
                type='total'
                title='Total Cases'
                color='#28a745'
              />
            </View>
            <View>
              <CaseReportChart
                caseSeries={caseSeries}
                caseName='recovered'
                type='daily'
                title='Daily Cases'
                color='#28a745'
              />
            </View>
          </View>
        )}

        {name.toLowerCase() === "deceased" && (
          <View style={styles.fullWidth}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.totalCount}>Till now </Text>
              <Text style={styles.number}>{count}</Text>
              <Text style={styles.totalCount}> cases has been deceased </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.number}>{delta}</Text>
              <Text style={styles.totalCount}>{`${
                delta > 1 ? " cases" : " case"
              } deceased today`}</Text>
            </View>

            <View>
              <CaseReportChart
                caseSeries={caseSeries}
                caseName='deceased'
                type='total'
                title='Total Cases'
                color='#6c757d'
              />
            </View>
            <View>
              <CaseReportChart
                caseSeries={caseSeries}
                caseName='deceased'
                type='daily'
                title='Daily Cases'
                color='#6c757d'
              />
            </View>
          </View>
        )}
      </View>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  fullWidth: {
    width: "100%"
  },
  container: {
    width: "100%",
    alignItems: "flex-start",
    margin: 10
  },
  number: {
    fontSize: 20,
    color: "#ff073a",
    fontWeight: "700"
  },
  totalCount: {
    fontSize: 18
  },
  newCount: {
    fontSize: 18
  }
});

export default CaseReport;
