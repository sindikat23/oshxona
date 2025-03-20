import { Button, Form, Input, Modal, notification } from 'antd'
import { users } from '../../constants'
import { useNavigate } from 'react-router-dom'

const Login = () => {

  const navigate = useNavigate()
  const getStorage = () => {
    localStorage.setItem("isAuth", true)
  }

  const loginHandle = (values) => {
    let findedUser = users.find((user) => (user.full_name == values.full_name && user.password == values.password))
    if (!findedUser) {
      // notification.error({
      //   message: "Login yoki parol xato",
      //   description: "Qayta urinib ko'ring"
      // })
      Modal.error({
        title: "Login yoki parol xato",
        content: "Qayta urinib ko'ring"
      })
    }
    if (findedUser.role == "oshpaz") {
      notification.success({
        message: "Kirish muvaffaqiyatli"
      })
      navigate('/oshpaz')
      getStorage()
    }
    else if (findedUser.role == "girgitton") {
      notification.success({
        message: "Kirish mufahiyatli"
      })
      navigate('/girgitton')
      getStorage()
      console.log(findedUser);
    }
  }

  return (
    <div className='container mx-auto w-[85%] h-screen flex flex-col justify-center items-center'>
      <h1 className='text-2xl font-semibold text-yellow-600 rounded-[50px_0px_50px_0px] py-2 px-14 bg-gray-200 shadow-amber-200 shadow-[0px_0px_10px] cursor-pointer hover:scale-105 duration-700 '>Milliy taomlar</h1>
      <div className='grid grid-cols-1 lg:grid-cols-2 border border-gray-500 rounded-lg w-full m-4'>
        <div className='overflow-hidden rounded-[8px_8px_0px_0px] lg:rounded-[8px_0px_0px_8px]'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzJfzFjVVumyxfxiNZNAF6NmTKPm5IgOOQgA&s"
            alt="restoran"
            className='object-cover w-full h-full' />
          {/* <p>Welcome</p> */}
        </div>
        <div className='w-full rounded-xl flex flex-col px-8 pt-2'>
          <h1 className='text-2xl font-bold text-green-600 text-center py-3'>Log <span className='text-orange-600'>In</span></h1>
          <Form
            layout='vertical'
            size='large'
            onFinish={loginHandle}
          >
            <Form.Item
              label={'Ismingizni kiriitng:'}
              name={'full_name'}
              rules={[
                {
                  required: true,
                  message: "Ismingizni kiritish majburiy!"
                }
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              label={'Parolingizni kiriting:'}
              name={'password'}
              rules={[
                {
                  required: true,
                  message: "Parol kiritish majburiy!"
                }
              ]}
            >
              <Input.Password />
            </Form.Item>
            <Form.Item className='text-center'>
              <Button htmlType='submit' className='px-10' color='primary' variant='solid'>Submit</Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default Login