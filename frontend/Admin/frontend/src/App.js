import Header from "./components/Admin/Header";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { useEffect, useContext, useState } from "react";
import { LoginContext } from "./components/Admin/ContextProvider/Context";
import AllRoute from "./Route/AllRoute";
// import Dash from "./components/Admin/Dash"



function App() {

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

export default App;
