import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '50%',
      },
    },
    button: {
      margin: theme.spacing(1),
      width: '100%',
      maxWidth: '200px',
    },
    table: {
      minWidth: 400,
      textAlign: 'left',
    },
    head: {
      backgroundColor: 'black',
      color: 'white',
    },
    body: {
      fontSize: 14,
    },
    row: {
      color: 'white',
    },
    Controller: {
      width: '100%',
    },
    paper: {
      flexDirection: 'column',
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    buttonModal: {
      textAlign: 'center',
    },
  }),
);
export default useStyles;
