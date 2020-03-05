import React, { PureComponent, Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container } from '@material-ui/core';

const headline = "JoJo Rabbit Review"

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



class ReviewHeadline extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Typography variant="h1" style={style.paper}>
                {headline}
            </Typography>
        )
    }
}

export default ReviewHeadline