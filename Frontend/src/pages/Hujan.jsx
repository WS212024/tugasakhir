import React from 'react'
import Content from '../components/Content'
import Grafik from '../components/Grafik'
import { motion } from "framer-motion"

const TABLE_HEAD = ["Tanggal","Waktu", "Curah Hujan",];

const TABLE_ROWS = [
  {
    hujan : "22",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    hujan : "55",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    hujan : "23",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    hujan : "12",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    hujan : "9999",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    hujan : "12",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    hujan : "12",
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  
];

const Hujan = () => {
  return (
    <div className='flex flex-col gap-6 p-4 h-full '>
      {/* Bagian atas */}
      <div className='h-1/3 w-full flex flex-col justify-center items-center gap-3'>
        <span className='font-raleway text-black font-bold text-2xl'>Grafik Curah Hujan</span>
        <Grafik  
        dataka={TABLE_ROWS} 
        value={"hujan"}
        x={"waktu"}/>    
      </div>
      {/* Bagian bawah */}
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration:1 , delay:1.5}}         
      className='h-2/3 flex flex-col justify-center items-center gap-3'>
        <span className='font-raleway text-black font-bold text-2xl'>Data Curah Hujan</span>
        <Content dataka={TABLE_ROWS} datake={TABLE_HEAD} />
      </motion.div> 
    </div>
  )
}

export default Hujan