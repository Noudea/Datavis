import React from 'react';
import 'rsuite/lib/styles/index.less';

import {useEffect , useState } from 'react'
import DualAxis from '../components/graphs/DualAxis';
import Line from '../components/graphs/Line'
import LineSales from '../components/graphs/LineSales';
import GlobalEfficiency from '../components/graphs/GlobalEfficiency';
import Cost from '../components/graphs/Cost';
import TurnOver from '../components/graphs/TurnOver';

const Home = () => {

    const handleChange =(event)=> {
        setSelectValue(event.target.value);
    }

    const [selectValue,setSelectValue] = useState('Global')


    useEffect(() => {
        console.log(selectValue)
    }, [selectValue])

    return(<>
    <select value={selectValue} onChange={handleChange} id="monselect">
        <option value="Global" defaultValue>Global</option>
        <option value="production">Production through rounds</option>
        <option value="sales">Sales through rounds</option>
        <option value="cost">Unit cost through rounds</option>
        <option value="turnover">Turnover and operating result evolution through rounds</option>
    </select>
    
    {selectValue ==='production' ? <Line></Line> : null}
    {selectValue ==='sales' ? <LineSales></LineSales> : null }
    {selectValue ==='Global' ? <DualAxis></DualAxis> : null }
    {selectValue ==='cost' ? <Cost></Cost> : null }
    {selectValue ==='turnover' ? <TurnOver></TurnOver> : null }
    <GlobalEfficiency></GlobalEfficiency>
    </>)
}


export default Home