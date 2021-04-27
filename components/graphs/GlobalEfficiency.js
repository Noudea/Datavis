import React from 'react';
import * as echarts from 'echarts';

import {useEffect , useState } from 'react'

const GlobalEfficiency = (props) => {

        useEffect(() =>{
        let myChart = echarts.init(document.getElementById('GlobalEfficiency'));
        let option 
        option = {
            title: {
                text: 'Efficiency'
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    saveAsImage: {show: true}
                }
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['round 0','round 1', 'round 2', 'round 3', 'round 4', 'round 5']
            },
            radar: {
                // shape: 'circle',
                indicator: [
                    { name: 'Strategy and Finance', max: 100},
                    { name: 'Quality Control and continuous improvment', max: 100},
                    { name: 'Research and development', max: 100},
                    { name: 'Operations', max: 100},
                    { name: 'Sourcing and supply chain', max: 100},
                    { name: 'Sales, marketing and customer service', max: 100},
                    { name: 'Shipping', max: 100},
                    { name: 'Maintenance', max: 100},
                    { name: 'Human ressources', max: 100}
                ]
            },
            series: [{
                name: 'Global Efficiency',
                type: 'radar',
                data: [
                    {
                        value: [8, 0, 10, 31, 15, 19 , 42, 19 , 12],
                        name: 'round 0'
                    },
                    {
                        value: [8, 8, 50, 31, 15, 19, 42, 19 , 12],
                        name: 'round 1'
                    },
                    {
                        value: [8, 25, 70, 31, 15, 22, 42, 19, 12],
                        name: 'round 2'
                    },
                    {
                        value: [8, 41, 75, 31, 15, 22, 42,19 , 12],
                        name: 'round 3'
                    },
                    {
                        value: [8, 63, 75, 31, 15, 22, 42,19, 12],
                        name: 'round 4'
                    },
                    {
                        value: [8, 63, 75, 31, 55, 22, 42, 19, 12],
                        name: 'round 5'
                    },
                ]
            }]
        };
        option && myChart.setOption(option);

        return () => {
            console.log('clean up')
        }

    },[props.option])
    
    
    
    
    return(<>
    <style jsx>{`
            #GlobalEfficiency {
                width:1200px;
                min-height:500px;
            }
        
        `}</style>
    <div id='GlobalEfficiency'></div>
    
    
    
    </>)
}

export default GlobalEfficiency