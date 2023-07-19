import React from 'react'
import './Select.css'



import SelectsImg from '../SelectImg/SelectImg'


function Selects() {
    return (
        <div id='views' className='selects'>
            <div className='container'>
                <SelectsImg bgImg="borabora.jpg" text='Bora Bora' />
                <SelectsImg bgImg="borabora2.jpg" text='Emerald Bay' />
                <SelectsImg bgImg="barbados.jpg" text='Maldives' />
                <SelectsImg bgImg="hawai.jpg" text='Grenada' />
                <SelectsImg bgImg="tanzania.jpg" text='Barbados' />
                <SelectsImg bgImg="golden.jpg" text='Key West' />
            </div>

        </div>
    )
}

export default Selects