import React, { useEffect, useState } from 'react'
import Card from "../components/Card";
import Content from "../components/Content";
import { motion } from "framer-motion"
import axios from 'axios';

const TABLE_HEAD = ["Tanggal","Waktu","Suhu", "Kelembaban","LDR","UV","Kecepatan Angin","Tekanan Udara","Curah Hujan"];





const Main = () => {
  const [tablerow, setTablerow] = useState ([])
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/api/data');
        const newData = response.data.map(item => ({
          suhu: item.temperature.toString(),
          kelembaban: item.humidity.toString(),
          uv:item.ultra.toString(),
          ldr:item.ldr.toString(),
          anemo:item.anemo.toString(),
          udara:item.pressure.toString(),
          angin:item.wind,
          hujan: item.rainfall.toString(),
          waktu: item.time, 
          tanggal: item.date,
          }))
        setTablerow(prevRows => [ ...newData]);
        // console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    
    fetchData();
  }, []);
  
  console.log(tablerow);
  return (
    <>
    <div  className="h-full w-full">
     {/* ganti agar bisa diubah */}
        <Card /> 
    </div>
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration:1 , delay:1}}
      className="h-full py-2 ">
          <Content  datake={TABLE_HEAD} dataka={tablerow}  delau={"4"}/>
      </motion.div>
    
    </>
  )
}

export default Main