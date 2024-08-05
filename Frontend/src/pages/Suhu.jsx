import { useRef } from 'react'
import Grafik from '../components/Grafik'
import Content from '../components/Content'
import { motion } from "framer-motion"

const TABLE_HEAD = [ "Tanggal","Waktu","Suhu" ];

const TABLE_ROWS = [
  {
    waktu : "12.11",
    tanggal : "12/02/22",
    suhu : "90" 
  },
  {
    tanggal : "12/02/22",
    waktu : "12.15",
    suhu : "80" 
  },
  {
    tanggal : "12/02/22",
    waktu : "12.14",
    suhu : "66" 
  },
  {
    tanggal : "12/02/22",
    waktu : "12.20",
    suhu : "12" 
  },
  {
    tanggal : "12/02/22",
    waktu : "12.30",
    suhu : "12" 
  },
  {
    tanggal : "12/02/22",
    waktu : "12.30",
    suhu : "12" 
  },
  {
    tanggal : "12/02/22",
    waktu : "12.30",
    suhu : "12" 
  },
  {
    tanggal : "12/02/22",
    waktu : "12.30",
    suhu : "12" 
  },
  {
    tanggal : "12/02/22",
    waktu : "12.30",
    suhu : "12" 
  },
  {
    tanggal : "12/02/22",
    waktu : "12.30",
    suhu : "12" 
  },
  {
    tanggal : "12/02/22",
    waktu : "12.30",
    suhu : "12" 
  },
  {
    tanggal : "12/02/22",
    waktu : "12.30",
    suhu : "12" 
  },
  {
    tanggal : "12/02/22",
    waktu : "12.30",
    suhu : "12" 
  },
  
];

const Suhu = () => {

  return (
    <div className='flex flex-col gap-6 p-4 h-full '>
      {/* Bagian atas */}
      <div className='h-1/3 w-full flex flex-col justify-center items-center gap-3'>
        <span className='font-raleway text-black font-bold text-2xl'>Grafik Suhu</span>
        <Grafik  
        dataka={TABLE_ROWS} 
        value={"suhu"}
        x={"waktu"}/>  
      </div>
      {/* Bagian bawah */}
      <motion.div 
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      transition={{ duration:1 , delay:1.5}}      
      className='h-2/3 flex flex-col justify-center items-center gap-3'>
        <span className='font-raleway text-black font-bold text-2xl'>Data Suhu</span>
        <Content dataka={TABLE_ROWS} datake={TABLE_HEAD} />
      </motion.div> 
    </div>
  )
}

export default Suhu