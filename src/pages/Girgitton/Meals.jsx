import { Button } from 'antd'
import { meals } from '../../constants/index'
import { MinusOutlined, PlusOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOrder } from '../../store/OrderSlice'
import { useParams } from 'react-router-dom'

const Meals = () => {
    const selector = useSelector((state) => (state?.OrderSlice))
    const dispatch = useDispatch()
    const params = useParams()

    console.log(selector);


    const [mealsList, setMealsList] = useState(meals.map((item) => ({
        ...item,
        count: 0
    })))

    const incr = (i) => {
        setMealsList((oldingi) => (
            oldingi.map((item, idx) => {
                return i == idx ? { ...item, count: item?.count + 1 } : item
            })
        ))
    }

    const decr = (i) => {
        setMealsList((oldingi) => (
            oldingi.map((item, idx) => {
                return i == idx ? { ...item, count: item?.count > 0 ? item.count - 1: item.count } : item
            })
        ))
    }

    const setCart = () => {
        const filtered = mealsList.filter((item) => (item.count > 0))

        dispatch(setOrder({
            client: params?.id,
            orders: filtered
        }))
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-3'>
            {
                mealsList?.map((item, i) => {
                    return <div key={i} className='shadow-gray-300 shadow-[0px_0px_5px] p-3 rounded-lg cursor-pointer'>
                        <img src={item.image} alt="meals" className='w-full h-[150px] object-contain hover:scale-108 duration-500' />
                        <p className='text-2xl font-semibold text-center py-2'>{item.name}</p>
                        <div className='flex justify-evenly items-center'>
                            <Button icon={<MinusOutlined />} onClick={() => { decr(i) }} />
                            <span className='text-2xl font-semibold'>{item.count}</span>
                            <Button icon={<PlusOutlined />} onClick={() => { incr(i) }} />
                        </div>
                    </div>
                })
            }

            <Button onClick={() => { setCart() }}>Tastiqlash</Button>
        </div>
    )
}

export default Meals