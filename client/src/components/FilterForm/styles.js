import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
        },
      },
      paper: {
        padding: theme.spacing(0),
        marginTop: '0%',
        marginBottom: '3%',
        width: '60%',
      },
      form: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
      },
      fileInput: {
        width: '97%',
        margin: '10px 0',
      },
      buttonSubmit: {
        marginBottom: 10,
      },
      selectDiv: {
        padding: theme.spacing(1),
        display: 'flex',
        flexGrow: 3,
        justifyContent: 'space-between',
    },
}));