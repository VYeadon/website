import React, { PureComponent, Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';
import ReviewHeadline from './ReviewHeadline';
import ReviewText from './ReviewText';


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



class ReviewBody extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Container>
                <ReviewHeadline />
                <ReviewText />
            </Container>
        )
    }
}

export default ReviewBody