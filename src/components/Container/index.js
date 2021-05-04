import React, {useState, useEffect} from 'react'
import Btn from '../Btn'
import Row from '../Row';
import Search from '../Search';
import Table from '../Table'
import TableBody from '../Tablebody';
import API from '../../utils/API';
import useDebounce from '../../utils/DebounceUser';
import TableBodyItem from '../TableBodyItem';
import TableHeader from '../TableHeader';






function Container() {

    const [users, setUsers] = useState([]);
    const [searchedUser, setSearchedUser] = useState("");
    const [buttonText, setButtonText] = useState("Sort");

    
    function loadUsers() {
        API.getUsers()
            .then(res => {
                console.log(res);
                console.log(res.data.results)
                setUsers(res.data.results);
            }).catch(err => console.log(err));
    };
    
    const debouncedInput = useDebounce(searchedUser, 300);

 
    useEffect(() => {
        if (debouncedInput) {
            console.log(debouncedInput);
            filterAPI();
        } else {
            loadUsers();
        }
    }, [debouncedInput]);

    
    function filterAPI() {
        API.getUsers().then(res => {
            const response = res.data.results;
            const employee = response.filter(name => {
                const first = name.name.first.toLocaleLowerCase();
                const last = name.name.last.toLocaleLowerCase();
                const lowerCaseSearchedUser = searchedUser.toLocaleLowerCase();
                const full = `${first} ${last}`;
                const fullOriginal = `${name.name.first} ${name.name.last}`
            
                if (full.includes(lowerCaseSearchedUser)) {
                    return true;
                } else if (fullOriginal.includes(searchedUser)) {
                    return true;
                }
            });
            setUsers(employee);
        });
    }

    const handleInputChange = e => {
        const value = e.target.value;
        console.log(value);
        setSearchedUser(value);
    };
   
    const changeButtonText = e => {
        e.preventDefault();

        if (buttonText === "Sort") {
            setButtonText("Reset");
            const sortUsers = users.sort((a, b) => a.name.last.localeCompare(b.name.last));
            setUsers(sortUsers);
        } else if (buttonText === "Reset") {
            setButtonText("Sort");
            loadUsers();
        }
    }

  
    function splitDob(str) {
        return str.slice(0, 10);
    }
    //returns components
    return (
        <div className="container">
            <Row>
                <Search
                    handleInputChange={handleInputChange}
                    value={searchedUser}
                />
                <Btn
                    changeButtonText={changeButtonText}
                    text={buttonText}
                />
            </Row>
            <Table>
                <TableHeader />
                <TableBody>
                    {users.map(user => (
                        <TableBodyItem
                            key={user.name.last}
                            picture={user.picture.thumbnail}
                            name={`${user.name.first} ${user.name.last}`}
                            phone={user.phone}
                            email={user.email}
                            dob={splitDob(user.dob.date)}
                        />
                    ))}
                </TableBody>
            </Table>
        </div>
    );

};

export default Container;