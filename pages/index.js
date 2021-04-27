import React from 'react';
import 'rsuite/lib/styles/index.less';

import {useEffect , useState } from 'react'
import DualAxis from '../components/graphs/DualAxis';
import Line from '../components/graphs/Line'
import LineSales from '../components/graphs/LineSales';
import GlobalEfficiency from '../components/graphs/GlobalEfficiency';

const Home = () => {

    const handleChange =(event)=> {
        setSelectValue(event.target.value);
    }

    const [selectValue,setSelectValue] = useState('production')


    useEffect(() => {
        console.log(selectValue)
    }, [selectValue])

    return(<>
    <select value={selectValue} onChange={handleChange} id="monselect">
        <option value="production" defaultValue>Production</option>
        <option value="sales">sales</option>
        <option value="production and operating results">production and operating results</option>
    </select>
    
    {selectValue ==='production' ? <Line></Line> : null}
    {selectValue ==='sales' ? <LineSales></LineSales> : null }
    {selectValue ==='production and operating results' ?     <DualAxis></DualAxis> : null }
    <GlobalEfficiency></GlobalEfficiency>
    
    </>)
}


export default Home