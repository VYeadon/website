import React, { PureComponent, Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';
import ReviewTile from './ReviewTile';
import ReviewInfo from './ReviewInfo';
import Rating from './Rating';


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



class ReviewHead extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Container>
                <Grid
                    container
                    justify="space-evenly"
                    alignItems="center"
                    spacing={2} >

                    <Grid item xs={12} md={5}>
                        <ReviewTile />
                    </Grid>
                    <Grid item xs={12} md={7}>
                        <Paper style={{ height: '100%' }} style={style.paper}>
                            <Rating />
                            <ReviewInfo />
                        </Paper>
                    </Grid>
                </Grid >
            </Container>
        )
    }
}

export default ReviewHead