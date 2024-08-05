import { CiTempHigh } from "react-icons/ci";
import { WiHumidity } from "react-icons/wi";
import { FaWater } from "react-icons/fa";
import { IoMdRainy } from "react-icons/io"
import { TbUvIndex } from "react-icons/tb";
import { RiDashboard2Line } from "react-icons/ri";
import { MdAir } from "react-icons/md";
import { IoSunny } from "react-icons/io5";


const Data = [
    {
        id : 1,
        title :"Beranda",
        icon : <RiDashboard2Line className="text-[#223A59] size-8"/>,
        url : "/"
    },
    {
        id : 2,
        title :"Suhu",
        icon : <CiTempHigh className="text-[#223A59] size-8"/>,
        url : "/suhu"
    },
    {
        id : 3,
        title :"Kelembaban",
        icon : <WiHumidity className="text-[#223A59] size-8"/>,
        url : "/kelembaban"
    },
    {
        id : 4,
        title :"Kecepatan Angin",
        icon : <MdAir className="text-[#223A59] size-8"/>,
        url :"/kecepatan"
    },
    {
        id : 5,
        title :"Curah Hujan",
        icon : <IoMdRainy className="text-[#223A59] size-8"/>,
        url :"/hujan"
    },
    {
        id : 6,
        title :"UV",
        icon : <TbUvIndex className="text-[#223A59] size-8"/>,
        url : "/uv"
    },
    {
        id : 7,
        title :"Tekanan Udara",
        icon : <MdAir className="text-[#223A59] size-8"/>,
        url : "/pressure"
    },
    {
        id : 8,
        title :"LDR",
        icon : <IoSunny className="text-[#223A59] size-8"/>,
        url : "/ldr"
    }
]

export default Data;