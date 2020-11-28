import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  login: {
    minWidth: 400,
    maxWidth: 400,
    margin: `${theme.spacing(16)}px auto`,
    padding: theme.spacing(2),
    borderRadius: 5,
    border: 'solid 1px black',
    textAlign: 'center',
  },
  input: {
    paddingTop: 10,
    marginTop: 20,
    width: '100%',
  },
  span: {
    color: 'red',
  },
  button: {
    maxWidth: 150,
    minWidth: 150,
  },
}));

export default useStyles;
