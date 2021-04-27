import React from 'react';
import * as echarts from 'echarts';

import {useEffect , useState } from 'react'

const Line = (props) => {

        useEffect(() =>{
        let myChart = echarts.init(document.getElementById('graphLine'));
        let option = props.option
        option = {
            xAxis: {
                type: 'category',
                data: ['round 0','round 1', 'round 2', 'round 3', 'round 4', 'round 5']
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
                    data: [637, 637, 795, 795, 795,795]
                },
                {
                    name: 'units produced',
                    type: 'line',
                    data: [758, 758, 837, 837, 837,837]
                },
                {
                    name: 'production capacity',
                    type: 'line',
                    data:  [758, 758, 837, 837, 837,837]
                },
                {
                    name: 'direct unit cost',
                    type: 'line',
                    data:  [865, 826, 787, 748, 738,602]
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