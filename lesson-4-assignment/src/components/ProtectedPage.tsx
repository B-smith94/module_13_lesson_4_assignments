import Logout from "./Logout";

const ProtectedPage: React.FC = () => {
    return (
        <div>
            <h1>Protected Page</h1>
            <Logout />
        </div>
    )
}
export default ProtectedPage;