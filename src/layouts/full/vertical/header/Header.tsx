import { IconButton, Box, AppBar, useMediaQuery, Toolbar, styled, Stack, Button } from '@mui/material';
import { useSelector, useDispatch } from 'src/store/Store';
import { toggleSidebar, toggleMobileSidebar } from 'src/store/customizer/CustomizerSlice';
import { IconMenu2 } from '@tabler/icons-react';
import Notifications from './Notification';
import Profile from './Profile';
import { AppState } from 'src/store/Store';
import Navigation from './Navigation';
import MobileRightSidebar from './MobileRightSidebar';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';



const Header = () => {
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up('lg'));
  const lgDown = useMediaQuery((theme: any) => theme.breakpoints.down('lg'));
  let location = useLocation();
  const [page, setPage] = useState('');


  useEffect(() => {
    if(location.pathname == '/pedidos/listapedidos'){
      setPage('Painel de Pedidos')
    }

  });


  // drawer
  const customizer = useSelector((state: AppState) => state.customizer);
  const dispatch = useDispatch();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: 'none',
    background: theme.palette.background.paper,
    justifyContent: 'center',
    backdropFilter: 'blur(4px)',
    [theme.breakpoints.up('lg')]: {
      minHeight: customizer.TopbarHeight,
    },
  }));
  const ToolbarStyled = styled(Toolbar)(() => ({
    width: '100%',

  }));



  return (
    <AppBarStyled position="sticky" color="default">
    
      <ToolbarStyled>
        {/* ------------------------------------------- */}
        {/* Toggle Button Sidebar */}
        {/* ------------------------------------------- */}
        <IconButton
          color="inherit" 
          aria-label="menu"
          onClick={lgUp ? () => dispatch(toggleSidebar()) : () => dispatch(toggleMobileSidebar())}
        >
          <IconMenu2 size="20" />
        </IconButton>
        {page != '' ?
    //  variant="contained"  color="primary"
         <Button  style={{ width: '46%', borderRadius: '20px'}}  variant="contained"  color="primary" >
         <span style={{ marginLeft: '-70%', position: 'relative', fontWeight: '600'}}>{page}</span>
       </Button>
        // {page}
                : null}
        {/* <LetterStyled>{page}</LetterStyled>  */}
        {/* ------------------------------------------- */}
        {/* Search Dropdown */}
        {/* ------------------------------------------- */}
        {/* <Search /> */}
        {lgUp ? (
          <>
            <Navigation />
          </>
        ) : null}

        <Box flexGrow={1} />
        <Stack spacing={1} direction="row" alignItems="center">
          {/* <Language /> */}
          {/* ------------------------------------------- */}
          {/* Ecommerce Dropdown */}
          {/* ------------------------------------------- */}
          {/* <Cart /> */}
          {/* ------------------------------------------- */}
          {/* End Ecommerce Dropdown */}
          {/* ------------------------------------------- */}
          <Notifications />
          {/* ------------------------------------------- */}
          {/* Toggle Right Sidebar for mobile */}
          {/* ------------------------------------------- */}
          {lgDown ? <MobileRightSidebar /> : null}
          <Profile />
        </Stack>
      </ToolbarStyled>
    </AppBarStyled>
  );
};

export default Header;
