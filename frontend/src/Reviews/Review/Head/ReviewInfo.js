import React, { PureComponent, Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';

const style = {
    paper: {
        padding: 20,
        margin: 10,
        marginBottom: 10,
    },
    img: {
        width: '100%'
    }
}

class ReviewInfo extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (

            <Paper style={{ height: '100%' }} style={style.paper}>
                Review Info
            </Paper>

        )
    }
}

export default ReviewInfo