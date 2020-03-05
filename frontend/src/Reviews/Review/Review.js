import React, { PureComponent, Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';
import ReviewHead from './Head/ReviewHead';
import ReviewBody from './Body/ReviewBody';

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

class Review extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Container>
                <ReviewHead />
                <ReviewBody />
            </Container>
        )
    }
}

export default Review