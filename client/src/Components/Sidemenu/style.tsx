import { makeStyles } from '@material-ui/core/styles';

const primary = '#455A64';
const textprimaryColor = '#FFFFFF';
const primaryTextColor = '#212121';
const accentColor = '#FF5722';
const Secundary = '#757575';
const defaultColor = '#607D8B';
/* .default-primary-color { background: #607D8B; }
.light-primary-color   { background: #CFD8DC; }
.text-primary-color    { color: #FFFFFF; }
.accent-color          { background: #FF5722; }
.primary-text-color    { color: #212121; }
.secondary-text-color  { color: #757575; }
.divider-color         { border-color: #BDBDBD; } */
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
    backgroundColor: primary,
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
    backgroundColor: primary,
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
    color: Secundary,
    '&:hover': {
      backgroundColor: accentColor,
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
    color: primaryTextColor,
    fontWeight: 'bold',
    fontSize: '20px',
  },
  button: {
    backgroundColor: primary,
    color: textprimaryColor,
  },
  dashboard: {
    backgroundColor: defaultColor,
    color: textprimaryColor,
  },
}));

export default usesStyles;
