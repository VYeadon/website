import React, { PureComponent, Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Container } from '@material-ui/core';

const testText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu velit lectus. Aenean ultricies feugiat erat, ut pellentesque erat. Vivamus id enim vitae leo mollis convallis et consectetur risus. Quisque quis diam porttitor, tristique nulla non, vulputate lectus. Duis vel mollis lectus. Cras rhoncus arcu at scelerisque lobortis. Fusce feugiat dolor eget interdum lacinia. Curabitur nec elit sit amet turpis placerat tincidunt id nec nisl. Nullam velit metus, tempor non feugiat vitae, semper sed lorem. Donec vehicula ac tortor nec posuere.\r\n\r\nVestibulum faucibus mi sed eros tempor bibendum. Praesent in commodo ex, ut euismod nulla. Proin ex elit, blandit non semper eu, fermentum sagittis eros. In ornare eros mi, sit amet tempor mauris porttitor quis. In sem dui, venenatis sit amet tellus ac, elementum dictum odio. Proin scelerisque sodales odio, sed varius sapien condimentum eget. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;\r\n\r\nInteger a elit sed nulla feugiat ultricies. Mauris iaculis nisl quis ultricies finibus. Praesent sodales mauris ac hendrerit volutpat. Maecenas consectetur nec est sit amet ornare. Pellentesque vehicula ligula vitae ipsum tincidunt, ac varius elit aliquam. Fusce aliquam urna in molestie finibus. Nullam ex diam, accumsan nec tempus et, sollicitudin ut nisl. Nunc varius orci in eleifend bibendum. Phasellus id ultrices eros. Vestibulum pulvinar ipsum ut lorem finibus consectetur in et nulla. Mauris laoreet dolor ac odio egestas luctus. Cras vel elit finibus, facilisis diam et, porttitor purus.\r\n\r\nIn id est ut purus venenatis tincidunt a ac enim. Proin venenatis accumsan posuere. Morbi nec ornare neque, ac bibendum leo. Etiam at urna sed massa lobortis suscipit. Fusce faucibus dui eu orci varius consequat. Sed mattis orci non tortor ullamcorper, id consequat elit vestibulum. Phasellus ac tortor varius, lobortis magna vel, consectetur orci.\r\n\r\nDonec rhoncus risus quis elit ultricies porta. Suspendisse felis lectus, luctus egestas nunc pulvinar, laoreet dapibus tellus. Maecenas ultrices ultrices tortor, nec mattis nulla laoreet non. In blandit quam eget ex dapibus finibus. In aliquam at ipsum sed ornare. Fusce gravida risus a quam faucibus semper. Donec a ante sapien. Quisque interdum lobortis leo vitae fermentum."


const style = {
    paper: {
        padding: 20,
        margin: 10,
        marginBottom: 10,
    },
}



class ReviewText extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Paper style={style.paper}>
                {testText}
            </Paper>
        )
    }
}

export default ReviewText