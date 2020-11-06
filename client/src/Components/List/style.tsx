import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& .MuiTextField-root': {
        margin: theme.spacing(1),
        width: 200,
      },
    },
    button: {
      margin: theme.spacing(1),
      width: '100%',
      maxWidth: '200px',
    },
    table: {
      minWidth: '50%vh',
    },
    head: {
      backgroundColor: 'white',
      color: 'white',
    },
    body: {
      fontSize: 14,
    },
  }),
);
export default useStyles;
