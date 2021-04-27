import React from 'react';
import Head from 'next/head';
import { Button } from 'rsuite';
import * as echarts from 'echarts';
import data from '../../data/data'

import {useEffect , useState } from 'react'

const Line = (props) => {

        useEffect(() =>{
        let myChart = echarts.init(document.getElementById('graphLine'));
        let option = props.option
        option = {
            xAxis: {
                type: 'category',
                data: ['round 1', 'round 2', 'round 3', 'round 4', 'round 5']
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            yAxis: {
                type: 'value'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['units sold', 'units produced', 'production capacity']
            },
            series: [
                {
                    name: 'units sold',
                    type: 'line',
                    data: [795, 795, 795, 795, 637]
                },
                {
                    name: 'units produced',
                    type: 'line',
                    data: [837, 837, 837, 837, 758]
                },
                {
                    name: 'production capacity',
                    type: 'line',
                    data: [837, 837, 837, 837, 758]
                },
        ]
        };

        // data.occurence.forEach(element => {
        //     option.series[0].data.push(element)
        // });
        // console.log(option.series[0].data)
        option && myChart.setOption(option);

        return () => {
            console.log('clean up')
        }

    },[props.option])
    
    
    
    
    return(<>
    <style jsx>{`
            #graphLine {
                width:1200px;
                min-height:500px;
            }
        
        `}</style>
    <div id='graphLine'></div>
    
    
    
    </>)
}

export default Line