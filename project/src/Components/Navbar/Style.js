import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({

button:{

    height:'50px',
},
grow: {
    flexGrow: 1,
  },
  title: {
   // flexGrow: 1,
    fontFamily:'fantasy',
    color:'rgb(45, 125, 190)',
    fontStyle:'oblique',
    fontWeight:'bold', 
    alignItems: 'center',
    display: 'flex',
    textDecoration: 'none',
  },

}));