import { Button } from 'antd'
import { drink } from '../../constants/index'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'

const Drinks = () => {
    const [drinksList, setDrinksList] = useState(drink.map((item) => ({
        ...item,
        count: 0
    })))
    const incr = (i) => {
        console.log(i);
        const current = [...drinksList]
        current[i].count += 1
        setDrinksList(current)
    }
    const decr = (i) => {
        console.log(i);
        const current = [...drinksList]
        if (current[i].count > 0) {
            current[i].count -= 1
        }
        setDrinksList(current)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3'>
            {
                drinksList?.map((item, i) => {
                    return <div key={i} className='shadow-gray-300 shadow-[0px_0px_5px] p-3 rounded-lg cursor-pointer'>
                        <img src={item.image} alt="drinks" className='w-full h-[150px] object-contain hover:scale-108 duration-500' />
                        <p className='text-2xl font-semibold text-center py-2'>{item.name}</p>
                        <div className='flex justify-evenly items-center'>
                            <Button icon={<MinusOutlined />} onClick={() => { decr(i) }} />
                            <span className='text-2xl font-semibold'>{item.count}</span>
                            <Button icon={<PlusOutlined />} onClick={() => { incr(i) }} />
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Drinks