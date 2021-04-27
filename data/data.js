const data = {
    production : 
        {
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['round 1', 'round 2', 'round 3', 'round 4', 'round 5']
            },
            series : [
                {
                    name: 'units sold',
                    type: 'line',
                    stack: '总量',
                    data: [795, 795, 795, 795, 637]
                },
                {
                    name: 'units produced',
                    type: 'line',
                    stack: '总量',
                    data: [837, 837, 837, 837, 758]
                },
                {
                    name: 'production capacity',
                    type: 'line',
                    stack: '总量',
                    data: [837, 837, 837, 837, 758]
                },
            ]
        }
}

;

export default data;
