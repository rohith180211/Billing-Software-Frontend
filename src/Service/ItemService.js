import axios from "axios";

export const addItem = async (item) => {
   return await axios.post('http://localhost:8080/api/v1.0/admin/items',item,{headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}
export const deleteItem = async (id) => {
    return await axios.delete(`http://localhost:8080/api/v1.0/admin/items/${id}`,{headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}

export const fetchItems = async () => {
    return await axios.get(`http://localhost:8080/api/v1.0/admin/items`,{headers:{'Authorization': `Bearer ${localStorage.getItem('token')}`}});
}