import * as React from 'react';
import { Text, View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
  graphStyle
} from "react-native-chart-kit";
const screenWidth = Dimensions.get("window").width;

const chartConfig = {
  backgroundGradientFrom: "#FFFFFF",
  backgroundGradientFromOpacity: 0.5,
  backgroundGradientTo: "#FFFFFF",
  backgroundGradientToOpacity: 0.9,
  fillShadowGradient: "#0000FF",
  fillShadowGradientOpacity: 1,
  color: (opacity = 1) => `black`,
  strokeWidth: 3, // optional, default 3
  barPercentage: 0.8,
  useShadowColorFromDataset: false // optional
};

const data = {
  labels: ["DEN", "WAS", "POR", "PHX", "NYK"],
  datasets: [
    {
      data: [11.4, 11.2, 10.8, 10.3, 10.2],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["PPG in Crunch Time"] // optional
};

const dataset = {
  labels: ["WAS", "NOP", "NYK", "PHX", "PHI"],
  datasets: [
    {
      data: [4.4, 4.3, 4.2, 3.9, 3.9],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["RPG in Crunch Time"] // optional
};

const dataset1 = {
  labels: ["DEN", "IND", "LAL", "POR", "MIN"],
  datasets: [
    {
      data: [2.0, 1.8, 1.8, 1.8, 1.7],
      color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
      strokeWidth: 2 // optional
    }
  ],
  legend: ["APG in Crunch Time"] // optional
};

export default function App() {
  return (
    <ScrollView style={{paddingTop: 50}}>
      <Text style={styles.header}>Teams Clutch Stats Graph</Text>
      <Text style={styles.chartID}>Points Per Game</Text>
      <BarChart
  style={graphStyle}
  data={data}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  verticalLabelRotation={30}
  fromZero
  showValuesOnTopOfBars
/>
<Text style={styles.chartID}>Rebounds Per Game</Text>
<BarChart
  style={graphStyle}
  data={dataset}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  verticalLabelRotation={30}
  fromZero
  showValuesOnTopOfBars
/>
<Text style={styles.chartID}>Assist Per Game</Text>
<BarChart
  style={graphStyle}
  data={dataset1}
  width={screenWidth}
  height={220}
  chartConfig={chartConfig}
  verticalLabelRotation={30}
  fromZero
  showValuesOnTopOfBars
/>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 30,
    color: 'black'
  },
  chartID: {
    textAlign: 'center',
    paddingTop: 25,
  }
});
