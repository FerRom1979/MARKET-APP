import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  table: {
    minWidth: '100vh',
  },
  head: {
    backgroundColor: 'red',
    color: 'white',
  },
  body: {
    backgroundColor: 'red',
    fontSize: 14,
  },
}));

export default useStyles;
