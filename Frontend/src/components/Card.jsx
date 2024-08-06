import React, { useEffect, useState } from "react";
import Terang from "../assets/terang.png";
import Kelembaban from "../assets/kelembaban.png";
import Uv from "../assets/uv.png";
import Angin from "../assets/angin.png";
import Hujan from "../assets/curahHujan1.png";
import Mendung from "../assets/mendung.png";
import { motion } from 'framer-motion';
import axios from "axios";

const Card = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const [currentDay, setCurrentDay] = useState(new Date().toLocaleDateString('id-ID', { weekday: 'long' }));
  const [suhu, setsuhu] = useState();
  const [angin, setAngin] = useState();
  const [uv, setUv] = useState();
  const [udara, setUdara] = useState();
  const [hujan, setHujan] = useState();
  const [kelembaban, setKelembaban] = useState();
  const [anemo, setAnemo] = useState();
  const [ldr, setLdr] = useState();
  const [weatherImage, setWeatherImage] = useState();
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://weatherstation21backend.vercel.app/api/data');
        response.data.map(item => (
          setsuhu(item.temperature.toString()),
          setKelembaban(item.humidity.toString()),
          setUv(item.ultra.toString()),
          setUdara(item.pressure.toString()),
          setAngin(item.wind),
          setHujan(item.rainfall.toString()),
          setAnemo(item.anemo.toString()),
          setLdr(item.ldr.toString())
          ))
        // console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    
    fetchData();
  }, []);


  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        setCurrentDay(new Date().toLocaleDateString('id-ID', { weekday: 'long' }));
    }, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
}, []);

useEffect(() => {
  if (hujan && ldr) {
    const hujanValue = parseFloat(hujan);
    const ldrValue = parseFloat(ldr);
    if (ldrValue >= 500) {
      setWeatherImage(Mendung); // Set image for rainy weather
    } else if (ldrValue >= 900){
      setWeatherImage(Hujan); // Set image for rainy weather      
    } else {
      setWeatherImage(Terang); // Set default image
    }
  }
}, [hujan, ldr]);

  return (
    <div className="flex py-7  px-2 gap-5 ">
      {/* kartu monitoring cuaca */}
      <motion.div 
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col items-center justify-center w-48 h-64 rounded-2xl shadow-lg gap-6 py-5 px-2 shadow-[#424769]`}>
        <p className="font-raleway font-bold text-gray-700 text-xl">
          <span className="text-black">{currentDay},</span>{currentTime}
        </p>
        <img src={weatherImage} alt="" className="size-24" />

        <p className="relative flex gap-1 text-4xl font-bold font-raleway">
          {suhu}{"\u00B0"}<span className="absolute text-2xl left-12 bottom-2">c</span>
        </p>
      </motion.div>
      {/* kartuMonitor */}
      <div className="flex flex-auto flex-col gap-8 px-3">
        <div className="flex gap-6">
            <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex w-1/3  flex-col rounded-2xl shadow-md shadow-[#424769]"> 
                <div className="flex px-4 justify-between items-center">
                    <h1 className="font-raleway font-bold text-black text-xl">Kecepatan Angin</h1>
                    <img src={Angin} alt="" className="size-14 p-0" />
                </div>
                <div className="place-self-center pb-3 font-raleway font-bold text-black text-5xl"> {anemo} <span className="text-sm text-gray-500">m/s</span></div>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex w-1/3  flex-col rounded-2xl shadow-md shadow-[#424769]"> 
                <div className="flex px-4 justify-between items-center">
                    <h1 className="font-raleway font-bold text-black text-xl">Index UV</h1>
                    <img src={Uv} alt="" className="size-14 p-0" />
                </div>
                <div className="place-self-center pb-3 font-raleway font-bold text-black text-5xl"> {uv}</div>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex w-1/3  flex-col rounded-2xl shadow-md shadow-[#424769]"> 
                <div className="flex px-4 justify-between items-center">
                    <h1 className="font-raleway font-bold text-black text-xl">Tekanan Udara</h1>
                    <img src={Angin} alt="" className="size-14 p-0" />
                </div>
                <div className="place-self-center pb-3 font-raleway font-bold text-black text-5xl"> {udara} <span className="text-sm text-gray-500">hPa</span></div>
            </motion.div>
        </div>
        <div className="flex gap-6">
        <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex w-1/5  flex-col rounded-2xl shadow-lg shadow-[#424769] justify-center items-center gap-2"> 
                <div className="flex px-4 justify-between items-center">
                    <h1 className="font-raleway font-bold text-black text-xl">Arah Angin</h1>
                </div>
                <div className="place-self-center pb-3 font-raleway font-bold text-black text-3xl text-gray-500">{angin}</div>
            </motion.div>
        <motion.div 
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex w-2/5  flex-col rounded-2xl shadow-lg shadow-[#424769]"> 
                <div className="flex px-4 justify-between items-center">
                    <h1 className="font-raleway font-bold text-black text-xl">Curah Hujan</h1>
                    <img src={Hujan} alt="" className="size-14 p-0" />
                </div>
                <div className="place-self-center pb-3 font-raleway font-bold text-black text-5xl"> {hujan} <span className="text-sm text-gray-500"> mm</span></div>
            </motion.div>
            <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex w-2/5  flex-col rounded-2xl shadow-lg shadow-[#424769]"> 
                <div className="flex px-4 justify-between items-center">
                    <h1 className="font-raleway font-bold text-black text-xl">Kelembaban</h1>
                    <img src={Kelembaban} alt="" className="size-14 p-0" />
                </div>
                <div className="place-self-center pb-3 font-raleway font-bold text-black text-5xl"> {kelembaban} <span className="text-sm text-gray-500">%</span></div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;
