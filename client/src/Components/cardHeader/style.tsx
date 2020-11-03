import { makeStyles } from '@material-ui/core/styles';

const darkPrimaryBackground = '#607D8B';
// const lightPrimaryColor = '#CFD8DC';
const textprimaryColor = '#FFFFFF';
// const primaryTextColor = '#212121';
// const accentColor = '#FF5722';

const usesStyles = makeStyles(() => ({
  root: {
    textAlign: 'center',
    background: darkPrimaryBackground,
  },
  text: {
    fontSize: 18,
    color: textprimaryColor,
  },
  title: {
    fontSize: 22,
    color: textprimaryColor,
    fontWeight: 'bold',
  },
}));
export default usesStyles;
