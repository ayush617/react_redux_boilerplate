import { Box, Button, Divider, TextField } from "@mui/material";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Login = () => {

  const submitDetails = () => {
    window.location.replace("/home")
  }
  // const handlecallbackresponse = (res) => {
  //   const user = res
  //   if (res) {
  //     const requestData = {
  //       token: res.credential,
  //     }
  //     loginApi({ requestData })

  //   }
  // }

  useEffect(() => {

  }, [])
  return (
    <Box>
      <Button id="signInDiv">
        Login with google
      </Button>
      <Divider sx={{ mt: [3, 3, 4] }}><Box sx={{ p: ['8px 56px'], borderRadius: ['8px'], border: '1px solid rgba(0, 0, 0, 0.12)' }}>OR</Box></Divider>
      <TextField
        autoFocus
        margin="dense"
        id="full-name"
        label="Email/Username"
        type="text"
        fullWidth
        variant="standard"
      />
      <TextField
        autoFocus
        margin="dense"
        id="full-name"
        label="Password"
        type="text"
        fullWidth
        variant="standard"
      /> <Button variant={`contained`} color={`secondary`} onClick={submitDetails}>
        Login
      </Button>
      <Box sx={{ mt: [3, 3, 4] }}>
        <Link to="/forgot-password" >Forgot Password</Link>
      </Box>
    </Box>
  )
}
export default Login