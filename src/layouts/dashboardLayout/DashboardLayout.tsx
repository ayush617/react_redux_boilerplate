import { Box, Drawer } from '@mui/material';
import { SyntheticEvent, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { SideNav, TopNav } from '../../components';


const drawerWidth = 240;
const navHeight = 64;

const DashboardLayout: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(true)

  return (
    <Box sx={{ height: '100vh', overflow: 'auto' }}>
      <TopNav height={navHeight} onMenuClick={(e: SyntheticEvent) => { setIsDrawerOpen(!isDrawerOpen) }} />
      {/* <Box sx={{ pt: `${navHeight + 13}px`, pr: '20px', pl: `${isDrawerOpen ? drawerWidth + 20 : 20}px`, height: `100%` }}>
        <Drawer
          variant={isDrawerOpen ? "permanent" : "temporary"}
          open={isDrawerOpen}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: `${drawerWidth}px`, mt: `${navHeight}px`, height: `calc(100% - ${navHeight}px)`, borderRight: 0 },
          }}
        >
          <SideNav />
        </Drawer>
      </Box> */}
        <Box component={`main`} sx={{ backgroundColor: '#e3f2fd', p: '20px', borderRadius: '8px 8px 0px 0px', minHeight: '100%' }}>
          <Outlet />
        </Box>
    </Box>
  );
}

export default DashboardLayout