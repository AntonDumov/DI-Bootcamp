const users = {
    user1: { age: 44, name: "picard" },
    user2: { age: 12, name: "sisko" },
    user3: { age: 109, name: "janeway" },
};

let filtered = []
Object.keys(users).forEach(key => {
    if (users[key].age >30) {
        filtered.push({id:key, age:users[key].age, name:users[key].name})
    }
})