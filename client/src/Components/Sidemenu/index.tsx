/* eslint-disable no-use-before-define */
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch as SwitchItem, Route, Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import ReorderIcon from '@material-ui/icons/Reorder';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MoneyIcon from '@material-ui/icons/Money';
import ListAltIcon from '@material-ui/icons/ListAlt';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup, Button, Paper } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Dashboard from '../Dashboard/index';
import usesStyles from './style';

const SideMenu: React.FC = () => {
  const [t, i18n] = useTranslation('global');
  const classes = usesStyles();
  const [mobileOpen, setMobileOpen] = useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const closeDrawer = () => {
    setMobileOpen(false);
  };
  const [darkmode, setDarkmode] = useState(false);
  const [formats, setFormats] = React.useState(() => ['bold']);
  const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
    if (newFormats[1] === 'true') {
      setDarkmode(false);
    } else {
      setDarkmode(true);
    }
  };
  const theme = createMuiTheme({
    palette: {
      type: darkmode ? 'dark' : 'light',
    },
  });

  const drawer = (
    <div>
      <ThemeProvider theme={theme}>
        <Paper>
          <List>
            <Link to="/listProducts" className={classes.list}>
              <ListItem onClick={closeDrawer} className={classes.listItem}>
                <ReorderIcon className={classes.icons} />
                Lista de Productos
              </ListItem>
            </Link>
            <Link to="/seccion2" className={classes.list}>
              <ListItem onClick={closeDrawer} className={classes.listItem}>
                <ShoppingCartIcon className={classes.icons} />
                Pedidos pendientes
              </ListItem>
            </Link>
            <Link to="/seccion3" className={classes.list}>
              <ListItem onClick={closeDrawer} className={classes.listItem}>
                <LocalShippingIcon className={classes.icons} />
                Pedidos Entregados
              </ListItem>
            </Link>
            <Link to="/seccion4" className={classes.list}>
              <ListItem onClick={closeDrawer} className={classes.listItem}>
                <MoneyIcon className={classes.icons} />
                Presupuestos
              </ListItem>
            </Link>
            <Link to="/seccion5" className={classes.list}>
              <ListItem onClick={closeDrawer} className={classes.listItem}>
                <ListAltIcon className={classes.icons} />
                Facturas
              </ListItem>
            </Link>
            <Link to="/seccion6" className={classes.list}>
              <ListItem onClick={closeDrawer} className={classes.listItem}>
                <KeyboardIcon className={classes.icons} />
                Datos contables
              </ListItem>
            </Link>
          </List>
        </Paper>
      </ThemeProvider>
    </div>
  );

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Paper>
          <div className={classes.root}>
            darkmode
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButton}
                >
                  <MenuIcon />
                </IconButton>
                <Typography variant="h6" noWrap>
                  {t('sidemenu.title-nav')}
                </Typography>
                {/* <IconButton className={classes.language}> */}
                <ButtonGroup disableElevation variant="contained" className={classes.button}>
                  <Button onClick={() => i18n.changeLanguage('en')}>En</Button>
                  <Button onClick={() => i18n.changeLanguage('es')}>Es</Button>
                </ButtonGroup>
                {/* </IconButton> */}
                <ToggleButtonGroup
                  value={formats}
                  onChange={handleFormat}
                  aria-label="text formatting"
                >
                  <ToggleButton value="true" aria-label="bold">
                    <Brightness4Icon />
                  </ToggleButton>
                </ToggleButtonGroup>
              </Toolbar>
            </AppBar>
            <nav className={classes.drawer}>
              <Hidden smUp implementation="css">
                <Drawer
                  variant="temporary"
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                  /* checked={checked} */
                  ModalProps={{
                    keepMounted: true,
                  }}
                >
                  <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                    <CloseIcon />
                  </IconButton>
                  {drawer}
                </Drawer>
              </Hidden>
              <Hidden xsDown implementation="css">
                <Drawer
                  className={classes.drawer}
                  variant="permanent"
                  classes={{
                    paper: classes.drawerPaper,
                  }}
                >
                  <div className={classes.toolbar} />

                  {drawer}
                </Drawer>
              </Hidden>
            </nav>
            <main className={classes.content}>
              <div className={classes.toolbar} />
              <SwitchItem>
                <Route exact path="/listProducts">
                  <Dashboard darkmode={darkmode} />
                </Route>
                <Route exact path="/seccion2">
                  <h1>section 2</h1>
                </Route>
                <Route exact path="/seccion3">
                  <h1>section 3</h1>
                </Route>
                <Route exact path="/seccion4">
                  <h1>section 4</h1>
                </Route>
                <Route exact path="/seccion5">
                  <h1>section 5</h1>
                </Route>
                <Route exact path="/seccion6">
                  <h1>section 6</h1>
                </Route>
              </SwitchItem>
            </main>
          </div>
        </Paper>
      </ThemeProvider>
    </Router>
  );
};

export default SideMenu;
