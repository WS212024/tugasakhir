import React from 'react'
import Grafik from '../components/Grafik'
import Content from '../components/Content'
import { motion } from "framer-motion"

const TABLE_HEAD = [ "Tanggal",  "Waktu","Kelembaban",];

const TABLE_ROWS = [
  {
    kelembaban: "70",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    kelembaban: "32",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    kelembaban: "54",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    kelembaban: "32",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    kelembaban: "14",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    kelembaban: "14",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    kelembaban: "14",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    kelembaban: "14",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    kelembaban: "14",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    kelembaban: "14",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    kelembaban: "14",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    kelembaban: "32",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    kelembaban: "32",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  
];

const Kelembaban = () => {
  return (
    <div className='flex flex-col gap-6 p-4 h-full '>
      {/* Bagian atas */}
      <div className='h-1/3 w-full flex flex-col justify-center items-center gap-3'>
        <span className='font-raleway text-black font-bold text-2xl'>Grafik Kelembaban</span>
        <Grafik  
        dataka={TABLE_ROWS} 
        value={"kelembaban"}
        x={"waktu"}/>    
      </div>
      {/* Bagian bawah */}
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration:1 , delay:1.5}}         
      className='h-2/3 flex flex-col justify-center items-center gap-3'>
        <span className='font-raleway text-black font-bold text-2xl'>Data Kelembaban</span>
        <Content dataka={TABLE_ROWS} datake={TABLE_HEAD} />
      </motion.div> 
    </div>
  )
}

export default Kelembaban