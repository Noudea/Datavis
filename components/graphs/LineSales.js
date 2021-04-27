import React from 'react';
import Head from 'next/head';
import { Button } from 'rsuite';
import * as echarts from 'echarts';
import data from '../../data/data'

import {useEffect , useState } from 'react'

const LineSales = (props) => {

        useEffect(() =>{
        let myChart = echarts.init(document.getElementById('graphLineSales'));
        let option 
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
            yAxis: [
                {
                    type: 'value',
                    name: 'selling price and unit cost',
                    min: 0,
                    max: 3000,
                    interval: 500,
                    axisLabel: {
                        formatter: '{value} €'
                    }
                },
                {
                    type: 'value',
                    name: 'turnover, salaries, non quality, tools expenses, operating result',
                    min: -225640,
                    max: 500000,
                    interval: 100000,
                    axisLabel: {
                        formatter: '{value} €'
                    }
                }
            ],
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['units sold', 'units produced', 'production capacity']
            },
            series: [
                {
                    name: 'selling price',
                    type: 'line',
                    data: [1750, 1750, 1909, 1909, 2045]
                },
                {
                    name: 'direct unit cost',
                    type: 'line',
                    data: [826, 787, 748, 738, 602]
                },
                {
                    name: 'salaries',
                    type: 'line',
                    yAxisIndex : 1,
                    data: [571593, 602875, 648375, 673968, 685343]
                },
                {
                    name: 'turnover',
                    type: 'line',
                    yAxisIndex : 1,
                    data: [1114750, 1391250, 1517727, 1517727, 1626136]
                },
                {
                    name: 'non quality',
                    type: 'line',
                    yAxisIndex : 1,
                    data: [92394, 87335, 73624, 68029, 47929]
                },
                {
                    name: 'tools expenses',
                    type: 'line',
                    yAxisIndex : 1,
                    data: [50000, 40000, 30000, 30000, 30000]
                },
                {
                    name: 'operating result',
                    type: 'line',
                    yAxisIndex : 1,
                    data: [-225640, 1901, 139140, 127279, 358337]
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
            #graphLineSales {
                width:1200px;
                min-height:500px;
            }
        
        `}</style>
    <div id='graphLineSales'></div>
    
    
    
    </>)
}

export default LineSales