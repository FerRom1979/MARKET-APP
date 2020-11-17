import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    display: 'inlineFlex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'red',
  },
  login: {
    maxWidth: '200px',
  },
}));

export default useStyles;
