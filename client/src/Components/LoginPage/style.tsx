import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: 400,
    height: 500,
    display: 'Flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '40%',
    marginTop: '20%',
    border: 'solid 1px black',
    textAlign: 'center',
    alignContent: 'center',
    borderRadius: 5,
  },
  login: {
    Width: '100%',
  },
  button: {
    padding: 10,
  },
  input: {
    paddingTop: 10,
    width: '90%',
  },
}));

export default useStyles;
