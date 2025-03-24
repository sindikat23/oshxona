// import React, { useEffect, useState } from 'react'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import stol from '../../assets/images/table.png'
import { useState } from 'react'
import { Button, Empty } from 'antd'
import { deleteOrder } from '../../store/OrderSlice'
import{ useReactToPrint }from 'react-to-print'

const Oshpaz = () => {

    // Comment: localStorage ga saqlagan payt uni get qilib olishni iloji yo'q chunki JSON parse qilinmaydigan narsa jonatganmiz
    
    // const [data, setData] = useState("")

    // useEffect(()=>{
    //     const storedData = localStorage.getItem("persist:order"); // LocalStorage-dan ma'lumot olish
    //     if (storedData) {
    //         setData(JSON.parse(storedData)); // State-ga saqlash
    //     }
    // }, [])
    // console.log(data);

    const [order, setOrder] = useState()
    const [orderId, setOrderId] = useState()
    const [orderSum, setOrderSum] = useState(0)
    const selector = useSelector(state => state.OrderSlice)
    const checkElement = useRef()

    const dispatch = useDispatch()

    const getOrders = (id) => {
        console.log(id);
        let finded_order = selector.value?.find((item) => (item?.client == id))
        let order_sum = finded_order?.orders?.reduce((sum, item) => {
            return sum + (item.price * item.count)

        }, 0)
        setOrder(finded_order.orders)
        setOrderSum(order_sum)
        setOrderId(id)
    }

    const deleteOrderHandle = () => {
        dispatch(deleteOrder({ orderId }))
        setOrder(null)
        setOrderSum(0)
    }
    const printHandle = useReactToPrint({
        contentRef: checkElement
    })
    
  return (
    <div className='container mx-auto w-[85%]'>
    <div className='grid grid-cols-3 gap-x-5'>
        <div className='col-span-1 border-r-2 border-gray-400 '>
            {
                selector?.value.map((item, idx) => (<li
                    className='flex gap-2 items-center m-4 p-2 rounded-2xl bg-gray-200'
                    key={item.client}
                    onClick={() => (getOrders(item?.client))}>
                    <p className='text-xl font-semibold'>{idx + 1}.</p>
                    <img src={stol} alt="table" className='w-20 rounded-2xl' />
                    <p className='text-xl font-semibold'>Stol:{item.client}</p>
                </li>))
            }
        </div>
        <div className='col-span-2' >
            {
                order?.length > 0 ? <div className='bg-gray-200 min-h-36 p-5 w-full' ref={checkElement}>
                    {
                        order?.map((item, i) => (
                            <div key={i} className='flex gap-4 py-4'>
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className='w-[200px] h-[100px] rounded-2xl' />
                                <div>
                                    <p>Nomi: {item.name}</p>
                                    <p>Soni: {item.count}</p>
                                </div>
                            </div>
                        ))
                    }
                    
                        <Button onClick={() => { deleteOrderHandle() }} variant='solid' className='w-full' color='green'>Yakunlash</Button>
                        <Button onClick={() => { printHandle() }} variant='solid' className='w-full mt-2' color='green'>Print</Button>
                </div>
                    :
                    <Empty />
            }
        </div>
    </div>
</div>
  )
}

export default Oshpaz