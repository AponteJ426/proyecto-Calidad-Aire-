
import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
  } from "recharts";

export default function RenderLineChart({ data }) {

    let value = data.map((val,index) => {
        return (
            {
                nameX: (index*5/60).toFixed(1)+"s",
                mgL: val,
                pv: 100,
                amt: 2200         
            }
        )
    })


    return (




      


    <LineChart
    width={1250}
    height={700}
    data={value}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="2 3" />
    <XAxis dataKey="nameX" />
    <YAxis dataKey= {(value.mgLbcx  +0.1)} />
    <Tooltip />
    <Legend />
    <Line
      type="natural"
      dataKey="mgL"
      stroke="#ff0000"
      strokeDasharray="5 5"
    />
  </LineChart>
     
    );
}

