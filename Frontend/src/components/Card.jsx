import React, { useEffect, useState } from "react";
import Terang from "../assets/terang.png";
import Kelembaban from "../assets/kelembaban.png";
import Uv from "../assets/uv.png";
import Angin from "../assets/angin.png";
import Hujan from "../assets/curahHujan1.png";
import { MdAir } from "react-icons/md";
import { WiHumidity } from "react-icons/wi";
import { IoMdRainy } from "react-icons/io"
import { TbUvIndex } from "react-icons/tb";
import Gelap from "../assets/gelap.jpeg";
import Mendung from "../assets/mendung.png";
import { TbMapWest, TbMapEast, TbMapNorth, TbMapSouth } from "react-icons/tb";
import { motion } from 'framer-motion';

const Card = () => {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
  );
  const [currentDay, setCurrentDay] = useState(new Date().toLocaleDateString('id-ID', { weekday: 'long' }));

  const getDirectionIcon = (compass) => {
    switch (compass) {
      case "North":
        return <TbMapNorth className="text-3xl text-gray-500" />;
      case "South":
        return <TbMapSouth className="text-3xl text-gray-500" />;
      case "East":
        return <TbMapEast className="text-3xl text-gray-500" />;
      case "West":
        return <TbMapWest className="text-3xl text-gray-500" />;
      default:
        return <TbMapNorth className="text-3xl text-gray-500" />;
    }
  };

  useEffect(() => {
    getDirectionIcon();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
        setCurrentDay(new Date().toLocaleDateString('id-ID', { weekday: 'long' }));
    }, 1000); // Update time every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
}, []);

  return (
    <div className="flex py-7  px-2 gap-5 ">
      {/* kartu monitoring cuaca */}
      <motion.div 
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center w-48 h-64 rounded-2xl shadow-lg gap-6 py-5 px-2 shadow-[#424769]">
        <p className="font-raleway font-bold text-gray-700 text-xl">
          <span className="text-black">{currentDay},</span>{currentTime}
        </p>
        <img src={Mendung} alt="" className="size-24" />

        <p className="relative flex gap-1 text-4xl font-bold font-raleway">
          28{"\u00B0"}<span className="absolute text-2xl left-12 bottom-2">c</span>
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
                <div className="place-self-center pb-3 font-raleway font-bold text-black text-5xl"> 456 <span className="text-sm text-gray-500">m/s</span></div>
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
                <div className="place-self-center pb-3 font-raleway font-bold text-black text-5xl"> 34</div>
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
                <div className="place-self-center pb-3 font-raleway font-bold text-black text-5xl"> 43</div>
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
                <div className="place-self-center pb-3 font-raleway font-bold text-black text-3xl text-gray-500">North</div>
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
                <div className="place-self-center pb-3 font-raleway font-bold text-black text-5xl"> 22<span className="text-sm text-gray-500"> mm</span></div>
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
                <div className="place-self-center pb-3 font-raleway font-bold text-black text-5xl"> 11<span className="text-sm text-gray-500">%</span></div>
            </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Card;
