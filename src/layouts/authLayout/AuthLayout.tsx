import { Box, Typography } from "@mui/material"
import { Link, Outlet } from "react-router-dom"
import brandLogo from '../../assets/svg/brandLogo.svg'
import Img from "../../components/utilityComponent/Img/Img"

type props = {}

const AuthLayout: React.FC<props> = () => {
  return (
    <Box sx={{ px: '15px', pt: '10vw', height: '100%', overflow: 'auto', backgroundColor: '#e3f2fd' }}>
      <Box sx={{
        maxWidth: '500px',
        backgroundColor: '#fff',
        borderRadius: ['8px'],
        mx: 'auto',
        p: [3, 3, 4],
        textAlign: 'center',
        boxShadow: '2px 2px 20px #0000000D',
        border: '1px solid rgba(144, 202, 249, 0.46)',
      }}>
        <Link to={'/'}>
          <Img src={brandLogo} alt="Logo" sx={{ maxWidth: '90px', width: '100%', display: 'block', mx: 'auto' }} />
        </Link>

        <Typography sx={{ color: '#673ab7', fontWeight: 'bold', mt: [2, 3] }} variant="h4">Hi, Welcome Back</Typography>
        <Typography sx={{ color: '#9e9e9e', mt: [2] }} variant={`body1`} component={'p'}>Enter your credentials to continue</Typography>
        <Box sx={{ pt: [3, 3, 4] }}>
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}
export default AuthLayout

