import React, { Children } from 'react'
import { useParams } from 'react-router-dom'
import table from '../../assets/images/table.png'
import { Image, Tabs } from 'antd'
import ovqatlar from '../../assets/images/meal.png'
import ichimliklar from '../../assets/images/drink.png'
import salatlar from '../../assets/images/salat.png'

import { meals } from '../../constants/'
import Meals from './Meals'
import Drinks from './Drinks'
import Salats from './Salats'


const Menu = () => {
    const params = useParams()
    console.log(params);

    const items = [
        {
            key: 1,
            label: <div className='flex items-center gap-2 p-2 rounded-xl border-gray-300 border-1 hover:shadow-blue-300 hover:shadow-[0px_0px_6px]'>
                <img src={ovqatlar} alt="meals" className=' rounded-xl w-[36px] h-[36px]' />
                <h1 className='text-xl font-semibold'>Ovqatlar</h1>
            </div>,
            children: <Meals/>
        },
        {
            key: 2,
            label: <div className='flex items-center gap-2 p-2 rounded-xl border-gray-300 border-1 hover:shadow-blue-300 hover:shadow-[0px_0px_6px]'>
                <img src={ichimliklar} alt="drinks" className=' rounded-xl w-[36px] h-[36px]' />
                <h1 className='text-xl font-semibold'>Ichimliklar</h1>
            </div>,
            children: <Drinks/>
        },
        {
            key: 3,
            label: <div className='flex items-center gap-2 p-2 rounded-xl border-gray-300 border-1 hover:shadow-blue-300 hover:shadow-[0px_0px_6px]'>
                <img src={salatlar} alt="salats" className=' rounded-xl w-[36px] h-[36px]' />
                <h1 className='text-xl font-semibold'>Salatlar</h1>
            </div>,
            children: <Salats/>
        }
    ]
    return (
        <div className='flex flex-col'>
            <div className=' flex items-center gap-4 px-4'>
                <img src={table} alt="table" className='w-16 h-14 shadow-gray-500 shadow-[0px_0px_6px] rounded-lg' />
                <p className='font-bold text-3xl text-blue-600'>{params.id}</p>
            </div>
            <div>
                <Tabs items={items} />
            </div>

        </div>

    )
}

export default Menu