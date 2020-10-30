import { makeStyles } from '@material-ui/core/styles';

const drawerWidth = 240;
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
    backgroundColor: 'blue',
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: 'black',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  closeMenuButton: {
    marginRight: 'auto',
    marginLeft: 0,
  },
  listItem: {
    borderBottom: '2px solid gray',
    textDecoration: 'none',
    fontSize: '15px',
    color: 'white',
    '&:hover': {
      backgroundColor: 'red',
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
}));

export default usesStyles;
