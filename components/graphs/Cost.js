import React from 'react';
import * as echarts from 'echarts';

import {useEffect , useState } from 'react'

const Cost = (props) => {

        useEffect(() =>{
        let myChart = echarts.init(document.getElementById('cost'));
        let option = props.option
        option = {
            title: {
                text: 'Unit cost'
            },
            xAxis: {
                type: 'category',
                data: ['round 0','round 1', 'round 2', 'round 3', 'round 4', 'round 5']
            },
            toolbox: {
                feature: {
                    dataView: {show: true, readOnly: false},
                    magicType: {show: true, type: ['line', 'bar']},
                    dataZoom:{show : true},
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
                data: ['tools cost', 'non quality cost']
            },
            series: [
                {
                    name: 'tools cost',
                    type: 'bar',
                    data: [0, 50000, 40000, 30000, 30000,30000]
                },
                {
                    name: 'non quality cost',
                    type: 'bar',
                    data: [111499, 92394, 87335, 73624, 68029,47929]
                }
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
            #cost {
                width:1200px;
                min-height:500px;
            }
        
        `}</style>
    <div id='cost'></div>
    
    
    
    </>)
}

export default Cost