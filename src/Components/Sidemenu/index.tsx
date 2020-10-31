// eslint-disable-next-line no-use-before-define
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
import PublicIcon from '@material-ui/icons/Public';
import LanguageIcon from '@material-ui/icons/Language';
import ForwardIcon from '@material-ui/icons/Forward';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { ButtonGroup, Button } from '@material-ui/core';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useTranslation } from 'react-i18next';
import Brightness4Icon from '@material-ui/icons/Brightness4';
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

  const drawer = (
    <div>
      <List>
        <Link to="/">
          <ListItem onClick={closeDrawer} className={classes.listItem}>
            <PublicIcon className={classes.icons} />
            text
          </ListItem>
        </Link>
        <Link to="/seccion2">
          <ListItem onClick={closeDrawer} className={classes.listItem}>
            <LanguageIcon className={classes.icons} />
            text
          </ListItem>
        </Link>
        <Link to="/seccion3">
          <ListItem onClick={closeDrawer} className={classes.listItem}>
            <ForwardIcon className={classes.icons} />
            text
          </ListItem>
        </Link>
      </List>
    </div>
  );
  const [darkmode, setDarkmode] = useState('');
  const [formats, setFormats] = React.useState(() => ['bold']);
  const handleFormat = (event: React.MouseEvent<HTMLElement>, newFormats: string[]) => {
    setFormats(newFormats);
    if (newFormats[1] === 'true') {
      setDarkmode('invert(100%)');
    } else {
      setDarkmode('invert(0%)');
    }
  };
  return (
    <Router>
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="fixed" className={classes.appBar} style={{ filter: `${darkmode}` }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="Open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              className={classes.menuButton}
              style={{ filter: `${darkmode}` }}
            >
              <MenuIcon style={{ filter: `${darkmode}` }} />
            </IconButton>
            <Typography variant="h6" noWrap style={{ filter: `${darkmode}` }}>
              {t('sidemenu.title-nav')}
            </Typography>
            <IconButton className={classes.language} style={{ filter: `${darkmode}` }}>
              <ButtonGroup
                disableElevation
                variant="contained"
                className={classes.button}
                style={{ filter: `${darkmode}` }}
              >
                <Button onClick={() => i18n.changeLanguage('en')}>En</Button>
                <Button onClick={() => i18n.changeLanguage('es')}>Es</Button>
              </ButtonGroup>
            </IconButton>
            <ToggleButtonGroup
              value={formats}
              onChange={handleFormat}
              aria-label="text formatting"
              style={{ filter: `${darkmode}` }}
            >
              <ToggleButton value="true" aria-label="bold">
                <Brightness4Icon />
              </ToggleButton>
            </ToggleButtonGroup>
          </Toolbar>
        </AppBar>
        <nav className={classes.drawer} style={{ filter: `${darkmode}` }}>
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
            <Route exact path="/" style={{ filter: `${darkmode}` }}>
              <div style={{ filter: `${darkmode}` }}>
                <Dashboard />
              </div>
            </Route>
            <Route exact path="/seccion2">
              <h1>section 2</h1>
            </Route>
            <Route exact path="/seccion3">
              <h1>section 3</h1>
            </Route>
          </SwitchItem>
        </main>
      </div>
    </Router>
  );
};

export default SideMenu;
