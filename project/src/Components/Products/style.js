import {makeStyles} from '@material-ui/core/styles' ;

export default makeStyles((Theme)=>({

    content:{
    //    flexGrow:1,
    //    backgroundColor:Theme.palette.background.default,
        padding:Theme.spacing(0),
       
    },
    toolbar: Theme.mixins.toolbar    //(height:56px)to add some space between appbar and content so it doesn't disappear under the AppBar


    
}));