import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import * as echarts from "echarts";
import autoBind from 'react-autobind';


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    input: {
        display: 'none',
    },root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        margin: theme.spacing.unit,
    },
    cssLabel: {
        '&$cssFocused': {
            color: purple[500],
        },
    },
    cssFocused: {},
    cssUnderline: {
        '&:after': {
            borderBottomColor: purple[500],
        },
    },
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: purple[500],
        },
    },
    notchedOutline: {},
    bootstrapRoot: {
        'label + &': {
            marginTop: theme.spacing.unit * 3,
        },
    },
    bootstrapInput: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.common.white,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
    bootstrapFormLabel: {
        fontSize: 18,
    },
});

class Polymerpull extends React.Component{
    constructor(props){
        super(props);
        this.state={
            node1VColor:"#399",
            node1v1Color:"",
            node1v2Color:"",
            node1v3Color:"",
            node2v1Color:"#c23531",
            node2v2Color:"",
            node2v3Color:"",
            count: 0,
            node1V1InEdge:"",
            node2V1InEdge:"",
            node1V3InEdge:"",
            node2V3InEdge:"",
            dcurr:['1/6','1/6','1/6','1/6','1/6','1/6'],
            dnext:[0,0,0,0,0,0]
        };
        autoBind(this);
    }

    initECharts(){
        var myChart = echarts.init(document.getElementById('charts'));
        var myChart2 = echarts.init(document.getElementById('charts2'));
        // 绘制图表
        let option = {
            title: {
                text: 'node 1'
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    data: [{
                        name: '节点1',
                        x: 550,
                        y: 100,
                        itemStyle: {
                            normal: {
                                color: this.state.node1v1Color===''?this.state.node1VColor:this.state.node1v1Color
                            }
                        }
                    }, {
                        name: '节点2',
                        x: 800,
                        y: 250,
                        itemStyle: {
                            normal: {
                                color: this.state.node1v2Color===''?this.state.node1VColor:this.state.node1v2Color
                            }
                        }
                    }, {
                        name: '节点3',
                        x: 750,
                        y: 500,
                        itemStyle: {
                            normal: {
                                color: this.state.node1v3Color===''?this.state.node1VColor:this.state.node1v3Color
                            }
                        }
                    }, {
                        name: '节点4',
                        x: 550,
                        y: 600,
                        itemStyle: {
                            normal: {
                                borderType: "dashed"
                            }
                        },
                    }, {
                        name: '节点5',
                        x: 250,
                        y: 418,
                        itemStyle: {
                            normal: {
                                borderType: "dashed"
                            }
                        }
                    }, {
                        name: '节点6',
                        x: 250,
                        y: 250,
                        itemStyle: {
                            normal: {
                                borderType: "dashed"
                            }
                        }
                    }],
                    // links: [],
                    links: [{
                        source: "节点1",
                        target: "节点2",

                    }, {
                        source: '节点3',
                        target: '节点2',
                    }, {
                        source: '节点1',
                        target: '节点3',
                        lineStyle: {
                            normal: {
                                color: this.state.node1V3InEdge
                            }
                        }
                    },{
                        source: '节点2',
                        target: '节点3',
                        lineStyle: {
                            normal: {
                                color: this.state.node1V3InEdge
                            }
                        }
                    },
                        {
                            source: '节点2',
                            target: '节点5',
                            lineStyle: {
                                normal: {
                                    type:"dashed"
                                }
                            }
                        },
                        {
                            source: '节点3',
                            target: '节点5',
                            lineStyle: {
                                normal: {
                                    type: "dashed"

                                }
                            }
                        }, {
                            source: '节点3',
                            target: '节点6',

                            lineStyle: {
                                normal: {
                                    type: "dashed"

                                }
                            }
                        }],
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        }
                    }
                }
            ]
        };
        let option2 = {
            title: {
                text: 'node 2'
            },
            tooltip: {},
            animationDurationUpdate: 1500,
            animationEasingUpdate: 'quinticInOut',
            series: [
                {
                    type: 'graph',
                    layout: 'none',
                    symbolSize: 50,
                    roam: true,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    edgeSymbol: ['circle', 'arrow'],
                    edgeSymbolSize: [4, 10],
                    edgeLabel: {
                        normal: {
                            textStyle: {
                                fontSize: 20
                            }
                        }
                    },
                    data: [{
                        name: '节点1',
                        x: 550,
                        y: 100,
                        itemStyle: {
                            normal: {
                                color: this.state.node2v1Color
                            }
                        }
                    }, {
                        name: '节点2',
                        x: 800,
                        y: 250,
                    }, {
                        name: '节点3',
                        x: 750,
                        y: 500,
                        itemStyle: {
                            normal: {
                                color: this.state.node2v3Color
                            }
                        }
                    }, {
                        name: '节点4',
                        x: 550,
                        y: 600,
                        itemStyle: {
                            normal: {
                                color: '#399'
                            }
                        }
                    }, {
                        name: '节点5',
                        x: 250,
                        y: 418,
                        itemStyle: {
                            normal: {
                                color: '#399'
                            }
                        }
                    }, {
                        name: '节点6',
                        x: 250,
                        y: 250,
                        itemStyle: {
                            normal: {
                                color: '#399'
                            }
                        }
                    }],
                    // links: [],
                    links: [{
                        source: '节点4',
                        target: '节点1',
                        lineStyle: {
                            normal: {
                                type: "dashed",
                                color: this.state.node1V3InEdge===""?"grey":this.state.node1V3InEdge
                            }
                        }
                    },  {
                        source: '节点5',
                        target: '节点1',
                        lineStyle: {
                            normal: {
                                type: "dashed",
                                color: this.state.node1V3InEdge===""?"grey":this.state.node1V3InEdge
                            }
                        }
                    }, {
                        source: '节点5',
                        target: '节点2',
                        lineStyle: {
                            normal: {
                                type: "dashed",
                            }
                        }
                    },  {
                        source: '节点6',
                        target: '节点2',
                        lineStyle: {
                            normal: {
                                type: "dashed"
                            }
                        }
                    },  {
                        source: '节点4',
                        target: '节点3',
                        lineStyle: {
                            normal: {
                                type: "dashed",
                                color: this.state.node2V3InEdge
                            }
                        }
                    }, {
                        source: '节点5',
                        target: '节点3',
                        lineStyle: {
                            normal: {
                                type: "dashed",
                                color: this.state.node2V3InEdge
                            }
                        }
                    },{
                        source: '节点4',
                        target: '节点5',
                    },{
                        source: '节点5',
                        target: '节点6',
                    },],
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0
                        }
                    }
                }
            ]
        };
        myChart.setOption(option);
        myChart2.setOption(option2);
    }

    componentDidMount() {
        // 基于准备好的dom，初始化echarts实例
       this.initECharts();
    }

    componentDidUpdate(){
        this.initECharts();
    }

     ITR = event => {
         if (this.state.count===1) {
             this.setState({node1v3Color:"#D10CFF",node1V3InEdge:"#D10CFF",node2V1InEdge:"#D10CFF",node2v1Color:"#D10CFF"});
         }
         if(this.state.count===2){
             console.log(this.state.count);
             this.setState({node2V3InEdge:"#80bdff",node2v3Color:"#80bdff",node1v3Color:"",node1V3InEdge:"",node2V1InEdge:"",node2v1Color:"#c23531",});
         }
         if (this.state.count===3) {
             this.setState({node1v3Color:"",node1V3InEdge:"",node2V3InEdge:"",node2v3Color:""})
         }
         this.setState({count:++this.state.count});
     };

    render(){
        const { classes } = this.props;

        return (
            <div>
                <div className={classes.root}>
                    <Button variant="contained" color="secondary" className={classes.button} onClick={this.ITR}>
                        Itr
                    </Button>
                    {/*<span>当前rank值:&nbsp;</span>*/}
                    {/*{this.state.dcurr.map(item => {*/}
                        {/*return <span>{item}&nbsp;</span>;*/}
                    {/*})}*/}
                    {/*<br/>*/}
                    {/*<span>下轮rank值:&nbsp;</span>*/}
                    {/*{this.state.dnext.map(item => {*/}
                        {/*return <span>{item}&nbsp;</span>;*/}
                    {/*})}*/}
                </div>
                <hr/>
                <div id="charts" style={{width:700,height:600,float:"left"}}></div>
                <div id="charts2" style={{width:650,height:600,float:"right"}}></div>
            </div>
        );
    }
}


export default withStyles(styles)(Polymerpull);