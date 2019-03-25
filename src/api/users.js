import Axios from "axios";

export const loadUsers = () =>
    Axios.get('http://demo.sibers.com/users')