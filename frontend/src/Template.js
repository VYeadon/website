import React, { PureComponent } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header/Header';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const sections = [
    { title: 'Movies', url: '#' },
    { title: 'TV Shows', url: '#' },
    { title: 'Games', url: '#' },
    { title: 'Books', url: '#' },
];

const useStyles = makeStyles(theme => ({
    mainGrid: {
        marginTop: theme.spacing(3),
    },
}));


class Base extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }



    render() {
        return (
            <CssBaseline >
                <Container maxWidth="lg">
                    <Header title="Reviews" sections={sections} />

                    <Paper variant="outlined" square >
                        <CssBaseline maxWidth="lg">
                            <Grid Container spacing={5}>
                                <h1> Title base app </h1>
                                <Button variant="contained" color="primary">
                                    Hello World
                                </Button>

                            </Grid>
                        </CssBaseline>
                    </Paper>

                    <Paper variant="outlined" square >
                        <CssBaseline maxWidth="lg">
                            <Grid Container spacing={5}>
                                <Card>
                                    <CardContent>
                                        <Typography color="textSecondary" gutterBottom>
                                            Word of the Day
                                            </Typography>
                                        <Typography variant="h5" component="h2">
                                            be
                                            </Typography>
                                        <Typography color="textSecondary">
                                            adjective
                                            </Typography>
                                        <Typography variant="body2" component="p">
                                            well meaning and kindly.
                                            <br />
                                            {'"a benevolent smile"'}
                                        </Typography>
                                    </CardContent>
                                    <CardActions>
                                        <Button size="small">Learn More</Button>
                                    </CardActions>
                                </Card>

                            </Grid>
                        </CssBaseline>
                    </Paper>
                </Container>
            </CssBaseline >
        )
    }
}

export default Base