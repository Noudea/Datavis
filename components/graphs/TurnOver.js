import React from 'react';
import * as echarts from 'echarts';

import {useEffect , useState } from 'react'

const TurnOver = (props) => {

        useEffect(() =>{
        let myChart = echarts.init(document.getElementById('turnOver'));
        let option = props.option
        option = {
            title: {
                text: 'Title'
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
                data: ['turnover', 'operating result']
            },
            series: [
                {
                    name: 'turnover',
                    type: 'bar',
                    data: [ 1027886, 1114750, 1391250, 1517727, 1517727,1626136]
                },
                {
                    name: 'operating result',
                    type: 'bar',
                    data: [-336681, -225640, 1901, 139140, 127279,358337]
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
            #turnOver {
                width:1200px;
                min-height:500px;
            }
        
        `}</style>
    <div id='turnOver'></div>
    
    
    
    </>)
}

export default TurnOver