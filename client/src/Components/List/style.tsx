import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: '100%',
      },
    },
    button: {
      margin: theme.spacing(1),
      width: '100%',
      maxWidth: '200px',
    },
    table: {
      minWidth: 650,
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
      width: '50%',
    },
  }),
);
export default useStyles;
