import React from 'react';
import * as echarts from 'echarts';

import {useEffect , useState } from 'react'

const DualAxis = () => {

        useEffect(() =>{
        let myChart = echarts.init(document.getElementById('graph'));
        let option;
        option = {
            title: {
                text: 'Global'
            },
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
                    dataZoom:{show : true},
                    restore: {show: true},
                    saveAsImage: {show: true},
                }
            },
            legend: {
                data: ['units sold', 'units produced', 'production capacity','operating results','selling price','direct unit cost']
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['round 0','round 1', 'round 2', 'round 3', 'round 4', 'round 5'],
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
                    max: 2100,
                    interval: 400,
                    axisLabel: {
                        formatter: '{value} units'
                    }
                },
                {
                    type: 'value',
                    name: '€',
                    position : 'right',
                    min: 0,
                    max: 400000,
                    interval: 100000,
                    axisLabel: {
                        formatter: '{value} €'
                    }
                },
                {
                    type: 'value',
                    name: '€',
                    position : 'right',
                    offset: 80,
                    min: 0,
                    max: 2100,
                    interval: 400,
                    axisLabel: {
                        formatter: '{value} €'
                    }
                }
            ],
            series: [
                {
                    name: 'units sold',
                    type: 'bar',
                    data: [637, 637, 795, 795, 795,795]
                },
                {
                    name: 'units produced',
                    type: 'bar',
                    data: [758, 758, 837, 837, 837,837]
                },
                {
                    name: 'production capacity',
                    type: 'bar',
                    data: [758, 758, 837, 837, 837,837]
                },
                {
                    name: 'operating results',
                    type: 'line',
                    yAxisIndex : 1,
                    data: [-336681,-225640, 1901, 139140,127279,358337]
                },
                {
                    name: 'selling price',
                    type: 'line',
                    yAxisIndex : 2,
                    data: [1613,1750, 1750, 1909, 1909, 2045]
                },
                {
                    name: 'direct unit cost',
                    type: 'line',
                    yAxisIndex : 2,
                    data: [865,826, 787, 748, 738, 602]
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

    },[])
    
    
    
    
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