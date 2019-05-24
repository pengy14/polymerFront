import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Mediate from "./Mediate";
import GenerateGraph from "./GenerateGraph";
import autoBind from 'react-autobind';
import axios from 'axios';
import Graph from 'graph-data-structure';
import * as echarts from 'echarts';
import Polymerpush from "./Polymerpush";
import OriginalGraph from "./OriginalGraph";

function TabContainer(props) {
    return (
        <Typography component="div" style={{padding: 8 * 3}}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
});

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            dataShow: "",
            vNum: 0,
            epsilon: 0.8,
            MaxItr: 100,
            graph: "",
        };
        autoBind(this);
    }

    handleChange = (event, value) => {
        this.setState({value});
    };

    useSample = event => {
        this.setState({
            graph: "Source : Out \n" +
                "1 : 2 3\n" +
                "2 : 3 5\n" +
                "3 : 2 5 6\n" +
                "4 : 1 3 5\n" +
                "5 : 1 2 3 6\n" +
                "6 : 2\n"
        })
    };



    useDefGraph = event => {
        axios.get(`localhost:9900`, {
            params: {
                vNum: this.state.vNum
            }
        })
    };

    setVNum = event => {
        console.log(event.target.value);
        this.setState({vNum: event.target.value});
    };

    startMode = event => {

    };

    clearOutput = event => {
        this.setState({dataShow: ''})
    };

    clearGraph = event => {
        this.setState({graph: ''})
    };

    changeEpsilon = event => {
        this.setState({epsilon: event.target.value});
    };

    changeMaxItr = event => {
        this.setState({MaxItr: event.target.value});
    };

    render() {
        const {classes} = this.props;
        const {value} = this.state;

        return (
            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={this.handleChange}>
                        <Tab label="Generate Graph"/>
                        <Tab label="Polymer Push"/>
                        <Tab label="Ligra Push"/>
                        <Tab label="Polymer Pull"/>
                        <Tab label="Ligra Pull"/>
                    </Tabs>
                </AppBar>
                {/*{value === 0 && <TabContainer><GenerateGraph useSample={this.useSample} useDefGraph={this.useDefGraph} setVNum={this.setVNum} clearGraph={this.clearGraph}/></TabContainer>}*/}
                {value === 0 && <TabContainer><OriginalGraph/></TabContainer>}
                {value === 1 &&
                <TabContainer><Polymerpush/></TabContainer>}
                {value === 2 &&
                <TabContainer><Mediate changeEpsilon={this.changeEpsilon} changeMaxItr={this.changeMaxItr}
                                       startMode={this.startMode} clearOutput={this.clearOutput}/></TabContainer>}
                {value === 3 &&
                <TabContainer><Mediate changeEpsilon={this.changeEpsilon} changeMaxItr={this.changeMaxItr}
                                       startMode={this.startMode} clearOutput={this.clearOutput}/></TabContainer>}
                {value === 4 &&
                <TabContainer><Mediate changeEpsilon={this.changeEpsilon} changeMaxItr={this.changeMaxItr}
                                       startMode={this.startMode} clearOutput={this.clearOutput}/></TabContainer>}
                {/*{console.log(this.constrGraph())}*/}
                {/*<svg>*/}
                {/*<circle cx={50} cy={50} r={10} fill="red"/>*/}
                {/*<rect cx={20} cy={20} r={10} width={500} height={300} opacity="0.3" >*/}
                {/*<line x1={260} y1={20} x2={260} y2={320} strokeDasharray={10}/>*/}
                {/*</rect>*/}
                {/*</svg>*/}
                {/*<div>*/}
                    {/*<div id="charts" style={{width: 700, height: 600, float: "left"}}></div>*/}
                    {/*<div id="charts2" style={{width: 700, height: 600, float: "right"}}></div>*/}
                {/*</div>*/}
            </div>

        );
    }
}

Container.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Container);