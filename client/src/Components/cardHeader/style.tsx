import { makeStyles } from '@material-ui/core/styles';

const usesStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    background: 'blue',
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
  title: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
}));
export default usesStyles;
