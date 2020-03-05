import React, { PureComponent, Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper } from '@material-ui/core';
import { ThumbUpAltRounded } from '@material-ui/icons/ThumbUpAltRounded';



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

class Rating extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (

            <Paper style={{ height: '100%' }} style={style.paper}>
                Rating
            </Paper>

        )
    }
}

export default Rating