import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(()=>({
root: {
   maxWidth:'100%',
   boxshadow: '100px 100px 40px black',
   borderRadius:"7%",
},
media: {
   height:300,
   paddingTop:'60%',
},
cardActions: {
  // height:30,
   display: 'flex',
   justifyContent: 'flex-end',
   
},
CardContent: {
  // height:30,
   display: 'flex',
   justifyContent: 'space-between',
},
font: {
fontWeight:'bold',
fontFamily:'fantasy',
   color: "black",
   '&:hover': {
      color: "rgb(45, 125, 190)",
   },
 },
}));