import { FaCheckCircle } from "react-icons/fa"

const ToastSuccess = () =>
{
    return (
        <div className="font-semibold flex items-center">
            <FaCheckCircle size={20} className="mx-1 text-green-600"/>
            Submitted successfully
        </div>
    )
}

export default ToastSuccess