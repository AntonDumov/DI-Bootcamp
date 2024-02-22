/**
 * 1. Create a new Users component
 * 2. Return a JSX with all the names and emails from this array
 * [
 *  { id: 1, name: "John", email: 'jjj@gamil.com' },
 *  { id: 2, name: "Marry", email: 'mmm@gamil.com' },
 *  { id: 3, name: "Anne", email: 'aaa@gamil.com' },
 * ]
 */
import User from './User';

const Users = () => {
    const usersArr = [
        { id: 1, name: 'John', email: 'jjj@gamil.com' },
        { id: 2, name: 'Marry', email: 'mmm@gamil.com' },
        { id: 3, name: 'Anne', email: 'aaa@gamil.com' }
    ];
    return (
        <div>
            {usersArr.map(u => (
                <User
                    name={u.name}
                    email={u.email}
                    key={u.id}
                />))}
        </div>
    );
};

export default Users;