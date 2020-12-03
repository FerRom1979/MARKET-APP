import { makeStyles } from '@material-ui/core/styles';

const primary = '#607D8B';
const defaultColor = '#BDBDBD';
const drawerWidth = '200px';
const usesStyles = makeStyles((theme) => ({
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
    background: '#512da8',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
      background: '#ff9800',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    background: '#ff9800',
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
    background: '#ff9800',
    '&:hover': {
      backgroundColor: defaultColor,
    },
  },
  icons: {
    marginRight: '10px',
  },
  language: {
    marginLeft: 'auto',
  },
  switch: {
    marginRight: '20px',
    marginLeft: '10px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '20px',
  },
  button: {
    backgroundColor: primary,
    color: 'white',
    marginLeft: 'auto',
  },
  list: {
    textDecoration: 'none',
  },
}));

export default usesStyles;
