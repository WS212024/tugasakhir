import { Card, Typography } from "@material-tailwind/react";



const Content =  ({ dataka, datake}) => {
  
  return (
      <Card  className="w-full overflow-auto h-4/5 bg-transparent shadow-2xl shadow-[#424769]">
        <table       
        className="w-full min-w-max table-auto text-left bg-transparent">
          <thead >
            <tr>
              {datake.map((head) => (
                <th key={head} className="border-b border-t border-blue-gray-100 bg-blue-gray-50 p-4 bg-transparent">
                  <Typography
                    variant="small"
                    color="black"
                    className="font-bold leading-none font-raleway"
                  >
                    {head}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataka.map((isi, index) => (
              <tr key={index} className="group">
                {isi.tanggal && <td className="p-4 group-hover:bg-[#758ba5] duration-300">
                  <Typography variant="small" color="black" className="font-raleway font-bold">
                    {isi.tanggal}
                  </Typography>
                </td>}
                {isi.waktu && <td className="p-4 group-hover:bg-[#758ba5] duration-300">
                  <Typography variant="small" color="black" className="font-raleway font-bold">
                    {isi.waktu}
                  </Typography>
                </td>}
                {isi.suhu && <td className="p-4 group-hover:bg-[#758ba5] duration-300">
                  <Typography variant="small" color="black" className="font-raleway font-bold">
                    {isi.suhu}{'\u00B0'}
                  </Typography>
                </td>}
                {isi.kelembaban && <td className="p-4 group-hover:bg-[#758ba5] duration-300">
                  <Typography variant="small" color="black" className="font-raleway font-bold">
                    {isi.kelembaban}
                  </Typography>
                </td>}
                {isi.angin && <td className="p-4 group-hover:bg-[#758ba5] duration-300">
                  <Typography variant="small" color="black" className="font-raleway font-bold">
                    {isi.angin}
                  </Typography>
                </td>}
                {isi.ldr && <td className="p-4 group-hover:bg-[#758ba5] duration-300">
                  <Typography variant="small" color="black" className="font-raleway font-bold">
                    {isi.ldr}
                  </Typography>
                </td>}
                {isi.uv && <td className="p-4 group-hover:bg-[#758ba5] duration-300">
                  <Typography variant="small" color="black" className="font-raleway font-bold">
                    {isi.uv}
                  </Typography>
                </td>}
                {isi.anemo && <td className="p-4 group-hover:bg-[#758ba5] duration-300">
                  <Typography variant="small" color="black" className="font-raleway font-bold">
                    {isi.anemo}
                  </Typography>
                </td>}
                {isi.udara && <td className="p-4 group-hover:bg-[#758ba5] duration-300">
                  <Typography variant="small" color="black" className="font-raleway font-bold">
                    {isi.udara}
                  </Typography>
                </td>}
                {isi.hujan && <td className="p-4 group-hover:bg-[#758ba5] duration-300">
                  <Typography variant="small" color="black" className="font-raleway font-bold">
                    {isi.hujan}
                  </Typography>
                </td>}
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
  );
};

export default Content