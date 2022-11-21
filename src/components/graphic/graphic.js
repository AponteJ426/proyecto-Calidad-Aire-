
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
                name: (index*5/60).toFixed(1)+"m",
                mgL: val,
                pv: 200,
                amt: 2400         
            }
        )
    })


    return (





    <LineChart
    width={1250}
    height={600}
    data={value}
    margin={{
      top: 5,
      right: 30,
      left: 20,
      bottom: 5
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line
      type="natural"
      dataKey="mgL"
      stroke="#FF5632"
      strokeDasharray="5 5"
    />
  </LineChart>
     
    );
}

