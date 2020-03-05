import React, { Fragment } from 'react'
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Review from './Reviews/Review/Review';
import { Grid } from '@material-ui/core';

class Template extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {
        return (
            <Fragment>
                <Header />
                <Review />
                <Footer />
            </Fragment>
        )
    }
}

export default Template