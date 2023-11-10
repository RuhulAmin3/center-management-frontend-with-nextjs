"use client";
import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { defaultStyles, defaultHeadingStyles } from "@/app/constants/styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Six", "Seven", "Eight", "Nine", "Ten"], // label will be all class name array
  datasets: [
    {
      label: "Number of students",
      data: [12, 19, 15, 25, 20], // data will be an array of total students of the classes.
      backgroundColor: [
        "#417dfc",
        "#ffaa01",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 0,
    },
  ],
};

const StudentChart = () => {
  return (
    <div style={{ ...defaultStyles, height: "100%" }}>
      <h3 style={{ ...defaultHeadingStyles }}>Class base students</h3>
      {/* <div
        style={{
          position: "absolute",
          top: "200",
          left: "200",
          transform: "translate(-50%, -50%)",
          fontSize: "20px",
        }}
      >
        {data.datasets[0].data.reduce(
          (initialValue, currentValue) => initialValue + currentValue,
          0
        )}
      </div> */}
      <Doughnut
        data={data}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: "bottom",
              labels: {
                font: {
                  size: 14,
                },
                padding: 10,
              },
            },
          },
          animation: {
            animateRotate: true,
          },
        }}
      />
    </div>
  );
};

export default StudentChart;
