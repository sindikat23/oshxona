import { clientTables } from "../../constants"
import table from '../../assets/images/table.png'
import { Image } from "antd"
import { Link } from "react-router-dom"

const Girgitton = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 py-4">
            {
                clientTables.map((item) => {
                    return <div className=""
                        key={item?.key}>
                        <div className="p-4 rounded-xl border border-gray-400">
                            <Link to={`/client/${item.key}`}>
                                <img src={table} alt="table" className=" w-full rounded-lg object-cover hover:scale-104 duration-700" />
                            </Link>
                            <p className="text-lg font-semibold text-orange-400">{item.name}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Girgitton