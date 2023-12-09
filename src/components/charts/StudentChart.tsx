"use client";
import React from "react";
import { defaultStyles, defaultHeadingStyles } from "@/app/constants/styles";
import Chart from "react-apexcharts";

const StudentChart = () => {
  return (
    <div
      style={{
        ...defaultStyles,
        height: "100%",
      }}
    >
      <Chart
        series={[12, 19, 15, 25, 20, 11]}
        options={{
          labels: ["Six", "Seven", "Eight", "Nine", "Ten", "Eleven"],
          legend: {
            position: "bottom",
            fontSize: "16px",
          },
          title: {
            text: "Class based students chart",
            align: "center",
            style: {
              ...defaultHeadingStyles,
            },
          },
          dataLabels: {
            style: {
              fontSize: "16px",
            },
          },
          plotOptions: {
            pie: {
              expandOnClick: false,
              donut: {
                size: "60%",
                labels: {
                  show: true,
                  name: {
                    show: true,
                  },
                  value: {
                    show: true,
                  },
                  total: {
                    show: true,
                    label: "Total",
                    showAlways: true,
                    formatter: function (w) {
                      return w.globals.seriesTotals.reduce(
                        (a: number, b: number) => {
                          return a + b;
                        },
                        0
                      );
                    },
                  },
                },
              },
            },
          },
          responsive: [
            {
              breakpoint: 600,
              options: {
                chart: {
                  width: "100%",
                },
                title: {
                  text: "",
                },
                legend: {
                  show: false,
                },
              },
            },
          ],
        }}
        type="donut"
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default StudentChart;
