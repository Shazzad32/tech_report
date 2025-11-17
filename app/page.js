import axios from "axios";
import Main from "./components/Main";

export default async function Home() {
  const kanaphuliassignIds = (
    await axios.get("https://retail-api.sultantracker.com/devices", {
      headers: {
        Authorization: "BEARER ####cp-!!!!$$sultantracker.com###",
      },
    })
  ).data;

  console.log(kanaphuliassignIds[10], "dlla");

  return <Main userinfo={kanaphuliassignIds} />;
}
