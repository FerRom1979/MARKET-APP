import { createStyles, makeStyles } from '@material-ui/core';

const drawerWidth = '200px';
const usesStyles = makeStyles((theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    drawer: {
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: theme.palette.primary.main,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
        background: theme.palette.secondary.main,
      },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      width: drawerWidth,
      background: theme.palette.secondary.main,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      textDecoration: 'none',
    },
    closeMenuButton: {
      marginRight: 'auto',
      marginLeft: 0,
    },
    listItem: {
      textDecoration: 'none',
      fontSize: '12px',
      color: 'white',
      marginTop: '1rem',
      background: theme.palette.secondary.main,
      '&:hover': {
        backgroundColor: '#ff5722',
      },
    },
    icons: {
      marginRight: '10px',
    },
    switch: {
      marginRight: '20px',
      marginLeft: '10px',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '20px',
    },
    button: {
      backgroundColor: theme.palette.action.selected,
      color: 'white',
      marginLeft: 'auto',
    },
    list: {
      textDecoration: 'none',
    },
  }),
);

export default usesStyles;
