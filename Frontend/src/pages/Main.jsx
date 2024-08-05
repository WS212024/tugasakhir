import React from 'react'
import Card from "../components/Card";
import Content from "../components/Content";
import { motion } from "framer-motion"

const TABLE_HEAD = ["Tanggal","Waktu","Suhu", "Kelembaban", "Air", "Hujan",];

const TABLE_ROWS = [
  {
    suhu : "90" ,
    kelembaban: "70",
    air : "98",
    hujan : "22",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    suhu : "80" ,
    kelembaban: "32",
    air : "44",
    hujan : "55",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    suhu : "66" ,
    kelembaban: "54",
    air : "43",
    hujan : "23",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    suhu : "12" ,
    kelembaban: "32",
    air : "44",
    hujan : "12",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    suhu : "12" ,
    kelembaban: "14",
    air : "99",
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    suhu : "12" ,
    kelembaban: "14",
    air : "99",
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    suhu : "12" ,
    kelembaban: "14",
    air : "99",
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    suhu : "12" ,
    kelembaban: "14",
    air : "99",
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    suhu : "12" ,
    kelembaban: "14",
    air : "99",
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    suhu : "12" ,
    kelembaban: "14",
    air : "99",
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    suhu : "12" ,
    kelembaban: "14",
    air : "99",
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    suhu : "12" ,
    kelembaban: "32",
    air : "44",
    hujan : "12",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    suhu : "12" ,
    kelembaban: "32",
    air : "44",
    hujan : "12",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  
];

const Main = () => {
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
          <Content  datake={TABLE_HEAD} dataka={TABLE_ROWS}  delau={"4"}/>
      </motion.div>
    
    </>
  )
}

export default Main