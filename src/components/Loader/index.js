// @flow

import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2),
  },
}));

const Loader = () => {
    const classes = useStyles();

    return (
        <CircularProgress className={classes.progress} />
    );
}

export default Loader;
