import { AppBar, Grid, Toolbar } from "@mui/material"
import { useState } from "react"
import { Link } from "react-router-dom"
import brandLogo from '../../../assets/svg/brandLogo.svg'
import notification from '../../../assets/svg/notification.svg'
import { Img } from "../../utilityComponent"

type props = {
  onMenuClick?: any,
  height?: number
}


const TopNav: React.FC<props> = ({ onMenuClick, height }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" sx={{ zIndex: 1300, height: (`${height}px` || 'auto'), backgroundColor: 'primary', boxShadow: 'none' }} >
      <Toolbar variant="dense">
        <Grid container columnSpacing={3} alignItems={`center`} justifyContent={`space-between`} >
          <Grid item>
            <Grid container columnSpacing={3} alignItems={`center`}>
              <Grid item>
                <Link to="/" style={{ textDecoration: 'none' }}>
                <Img src={brandLogo} alt="Logo" sx={{ maxWidth: '90px', width: '100%', display: 'block', mx: 'auto' }} />
                </Link>
              </Grid>
            </Grid>
          </Grid>

          <Grid item >
            <Img src={notification} alt="Logo" sx={{ maxWidth: '90px', width: '100%', display: 'block', mx: 'auto' }} />
          </Grid>
        </Grid>
      </Toolbar>

    </AppBar>
  )
}
export default TopNav