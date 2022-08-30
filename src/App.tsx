import { Box } from '@mui/material';
import AppRouter from './router';


function App() {
  return (
    <Box className="App" sx={{ minHeight: 'inherit', height: 'inherit', overflow: 'auto' }}>
      <AppRouter />
    </Box>
  );
}

export default App;
