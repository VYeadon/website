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

class ReviewTile extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (

            <Paper style={style.paper} square={true}>
                <img style={style.img} src="/img/review_img_placeholder.jpg" />
            </Paper>

        )
    }
}

export default ReviewTile