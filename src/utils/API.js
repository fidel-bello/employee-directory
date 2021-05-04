import axios from 'axios';

export default {
    getUsers: function() {
        return axios.get("https://randomuser.me/api/?results=10&nat=us&seed=0afe8ba584174675&inc=picture,name,phone,email,dob");
    }
};
