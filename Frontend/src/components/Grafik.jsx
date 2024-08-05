
import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer
    } from "recharts";

const Grafik = ({dataka ,x,value}) => {
    // console.log(value);
    console.log(x);
    
    const data ={dataka}
    console.log(data.dataka);
    return (
    <>
    <ResponsiveContainer width="100%" height="100%">
        <AreaChart
        width={500}
        height={400}
        data={data.dataka}
        margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
        }}
        >
            <CartesianGrid strokeDasharray="10 0" stroke='' />
            <XAxis dataKey={x} stroke='#000' />
            <YAxis stroke='#000'/>
            <Tooltip />
            <Area type="monotone" dataKey={value} stroke="#223a59" fill="#223a59" />
        </AreaChart>
    </ResponsiveContainer>
    </>
)
}

export default Grafik