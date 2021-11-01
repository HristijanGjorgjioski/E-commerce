import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: '20px', 
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly'
  },
  imageSection: {
    width: '35%',
    marginLeft: '20px',
    [theme.breakpoints.down('sm')]: {
      marginLeft: 0,
    },
  },
  media: {
    borderRadius: '20px',
    objectFit: 'cover',
    width: '100%',
    maxHeight: '600px',
  },
  section: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: '50%',
    borderRadius: '20px',
    margin: '10px',
    flex: 1,
  },
  btnAddToCart: {
    marginTop: '20%'
  },
  recommendedPosts: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  loadingPaper: {
    display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px', borderRadius: '15px', height: '39vh',
  },
}));