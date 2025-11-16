import axios from "axios";
import Main from "./components/Main";

export default async function Home() {
  // const alldevices = (
  //   await axios.get(`https://inventory-manage-three.vercel.app/api/devices`)
  // ).data;

  const kanaphuliassignIds = (
    await axios.get("https://retail-api.sultantracker.com/devices", {
      headers: {
        Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
      },
    })
  ).data;

  // console.log(kanaphuliassignIds[10], "dlla");

  return <Main userinfo={kanaphuliassignIds} />;
}
