import React from 'react'
import Grafik from '../components/Grafik'
import Content from '../components/Content'
import { motion } from "framer-motion"

const TABLE_HEAD = ["Tanggal", "Waktu","Air" ];

const TABLE_ROWS = [
  {
    air : "98", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    air : "44", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    air : "43", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    air : "44", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    air : "99", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    air : "99", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    air : "99", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    air : "99", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    air : "99", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    air : "99", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    air : "99", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    air : "44", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  {
    air : "44", 
    waktu : "12.30",
    tanggal : "12/02/22"
  },
  
];

const Kecepatan = () => {
  return (
    <div className='flex flex-col gap-6 p-4 h-full '>
      {/* Bagian atas */}
      <div className='h-1/3 w-full flex flex-col justify-center items-center gap-3'>
        <span className='font-raleway text-black font-bold text-2xl'>Grafik Kecepatan Angin</span>
        <Grafik  
        dataka={TABLE_ROWS} 
        value={"air"}
        x={"waktu"}/>    
      </div>
      {/* Bagian bawah */}
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration:1 , delay:1.5}}         
      className='h-2/3 flex flex-col justify-center items-center gap-3'>
      <span className='font-raleway text-black font-bold text-2xl'>Data Kecepatan Angin</span>
        <Content dataka={TABLE_ROWS} datake={TABLE_HEAD} />
      </motion.div> 
    </div>
  )
}

export default Kecepatan