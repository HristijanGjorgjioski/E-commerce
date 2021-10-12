import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    marginTop: '12%',
    width: '30%',
    display: 'flex',
    justifyContent: 'center',
  },
  mainDiv: {
    display: 'block',
    justifyContent: 'center'
  },
  [theme.breakpoints.down('sm')]: {
    paper: {
      padding: theme.spacing(2),
      marginTop: '30%',
      width: '95%'
    }
  }
}));