import Header from "./Header";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./ContextProvider/Context";
import AllRoute from "./AdminRoute";

function Admin() {

  const [data, setData] = useState(false);

  const { logindata, setLoginData } = useContext(LoginContext);

  useEffect(() => {
    setTimeout(()=>{
    setData(true)
    },2000)

  }, [])

  return (
    <>
      {
        data ? (
          <>
            <Header />
            <AllRoute/>
          </>

        ) : <Box sx={{ display: 'flex', justifyContent: "center", alignItems: "center", height: "100vh" }}>
          Loading... &nbsp;
          <CircularProgress />
        </Box>
      }


    </>
  );
}

export default Admin;