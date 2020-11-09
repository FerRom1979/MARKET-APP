import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  table: {
    minWidth: '50vh',
  },
  head: {
    backgroundColor: 'black',
    color: 'white',
  },
  body: {
    fontSize: 14,
  },
}));

export default useStyles;
