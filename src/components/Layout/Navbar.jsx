import { UserOutlined } from '@ant-design/icons';
import { Avatar, Button, Space } from 'antd';
import { Link } from 'react-router-dom';

const Navbar = () => {

  return (
    <div className="container mx-auto py-4 px-2 mb-2 bg-[#cecdcd] rounded-[0px_0px_10px_10px] sticky z-10 top-0">
      <div className="flex justify-between items-center">
        <div>
          <Link to={'/girgitton'}>
          <h1 className='text-2xl font-semibold text-yellow-600 rounded-[0px_50px_0px_50px] py-2 px-14 bg-[#525a4629] shadow-amber-200 shadow-[0px_0px_10px] cursor-pointer hover:scale-105 duration-700 '>Milliy taomlar</h1></Link>
        </div>
      

        <div className='flex items-center gap-2'>
          <Link to={'/clients'}>
            <Button variant='solid' color='blue'>Buyurtmalar</Button> 
          </Link>
          <Link to={'/girgitton'}>
            <Space direction="vertical" size={16}>
              <Space wrap size={16}>
                <Avatar size="large" icon={<UserOutlined />} />
              </Space>
            </Space></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar