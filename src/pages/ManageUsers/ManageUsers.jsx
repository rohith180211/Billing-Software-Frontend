import './ManageUser.css'
import UserForm from "../../Components/UserForm/UserForm.jsx";
import UserList from "../../Components/UsersList/UserList.jsx";
import {useEffect, useState} from "react";
import toast from "react-hot-toast";
import {fetchUser, fetchUsers} from "../../Service/UserService.js";
const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const response=await fetchUsers();
                setUsers(response.data);
            }catch(err){
                console.log(err);
                toast.error(err.message);
            }
            finally {
                setLoading(false);
            }
        }
        fetchData();
    },[])
    return (
        <div className="users-container text-light">
            <div className="left-column">
                <UserForm setUsers={setUsers}/>
            </div>
            <div className="right-column">
                <UserList users={users} setUsers={setUsers}/>
            </div>
        </div>
    )
}
export default ManageUsers;