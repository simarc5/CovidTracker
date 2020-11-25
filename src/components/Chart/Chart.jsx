import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../API";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

const Chart = ({ data: { confirmed, deaths, recovered }, country }) => {
  const [dailyData, setDailyData] = useState({});

  useEffect(() => {
    const fetchAPI = async () => {
      //Populate dailyData with modified data which is returned from func fetchDailyData
      const gotten = await fetchDailyData();
      setDailyData(gotten);
    };

    //console.log("Gotten Data", dailyData);
    //Call the function
    fetchAPI();
  }, []);

  //For local countries data
  const barChart = confirmed ? (
    <Bar
      data={{
        labels: ["Infected", "Recovered", "Deaths"],
        datasets: [
          {
            labels: "People",
            backgroundColor: [
              " rgba(0, 0, 255, 0.5)",
              " rgba(0, 255, 0, 0.5)",
              "rgba(255, 0, 0, 0.5)",
            ],
            data: [confirmed.value, recovered.value, deaths.value],
          },
        ],
      }}
      options={{
        legend: { display: false },
        title: { display: true, text: `Current state in ${country}` },
      }}
    />
  ) : null;

  //For the global data
  const lineChart = dailyData[0] ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),

        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255,255,255,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;
  // console.log(confirmed, recovered, deaths);

  return (
    <div className={styles.container}>
      {/* <h1>Chart Component</h1> */}
      {country ? barChart : lineChart}
    </div>
  );
};

export default Chart;
