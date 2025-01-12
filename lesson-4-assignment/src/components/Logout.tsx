import useSessionStorageManager from "./SessionStorageManager";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { clearToken } = useSessionStorageManager();
    const navigate = useNavigate();

    const handleLogout = () => {clearToken(); navigate('/')}

    return (
        <button onClick={handleLogout}>Logout</button>
    )
}

export default Logout