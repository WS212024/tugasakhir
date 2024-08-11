import React, { useEffect, useState } from 'react'
import Card from "../components/Card";
import Content from "../components/Content";
import { motion } from "framer-motion"
import axios from 'axios';

const TABLE_HEAD = ["Tanggal", "Waktu", "Suhu", "Kelembaban","Arah Angin" , "LDR", "UV", "Kecepatan Angin", "Tekanan Udara", "Curah Hujan"];

const Main = () => {
  const [tablerow, setTablerow] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://weatherstation21backend.vercel.app/api/data');
        const newData = response.data.map(item => ({
          suhu: item.temperature.toString(),
          kelembaban: item.humidity.toString(),
          uv: item.ultra.toString(),
          ldr: item.ldr.toString(),
          anemo: item.anemo.toString(),
          udara: item.pressure.toString(),
          angin: item.wind,
          hujan: item.rainfall.toString(),
          waktu: item.time,
          tanggal: item.date,
        }));

        // Sort the data by date and time
        const sortedData = newData.sort((a, b) => {
          const dateA = new Date(`${a.tanggal} ${a.waktu}`);
          const dateB = new Date(`${b.tanggal} ${b.waktu}`);
          return dateB - dateA; // Sort descending (latest first)
        });

        setTablerow([...sortedData]);
      } catch (error) {
        console.log(error.message);
      }
    };

    // Fetch data every 10 seconds
    const intervalId = setInterval(fetchData, 10000); 

    // Fetch data immediately on mount
    fetchData();

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="h-full w-full">
        <Card />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="h-full py-2">
        <Content datake={TABLE_HEAD} dataka={tablerow} delau={"4"} />
      </motion.div>
    </>
  )
}

export default Main;
