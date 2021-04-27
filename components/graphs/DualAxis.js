import React from 'react';
import Head from 'next/head';
import { Button } from 'rsuite';
import * as echarts from 'echarts';
import data from '../../data/data'

import {useEffect , useState } from 'react'

const DualAxis = () => {

        useEffect(() =>{
        let myChart = echarts.init(document.getElementById('graph'));
        let option;
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'cross',
                    crossStyle: {
                        color: '#999'
                    }
                }
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    restore: {show: true},
                    saveAsImage: {show: true}
                }
            },
            legend: {
                data: ['units sold', 'units produced', 'production capacity','operating results']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['round 1', 'round 2', 'round 3', 'round 4', 'round 5'],
                    axisPointer: {
                        type: 'shadow'
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    name: 'units',
                    min: 0,
                    max: 1000,
                    interval: 100,
                    axisLabel: {
                        formatter: '{value} units'
                    }
                },
                {
                    type: 'value',
                    name: 'euros',
                    min: 0,
                    max: 400000,
                    interval: 100000,
                    axisLabel: {
                        formatter: '{value} €'
                    }
                }
            ],
            series: [
                {
                    name: 'units sold',
                    type: 'bar',
                    data: [795, 795, 795, 795, 637]
                },
                {
                    name: 'units produced',
                    type: 'bar',
                    data: [837, 837, 837, 837, 758]
                },
                {
                    name: 'production capacity',
                    type: 'bar',
                    data: [837, 837, 837, 837, 758]
                },
                {
                    name: 'operating results',
                    type: 'line',
                    yAxisIndex : 1,
                    data: [-225640, 1901, 139140,127279,359337]
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

    },[data])
    
    
    
    
    return(<>
    <style jsx>{`
            #graph {
                width:1200px;
                min-height:500px;
            }
        
        `}</style>
    <div id='graph'></div>
    
    
    
    </>)
}

export default DualAxis