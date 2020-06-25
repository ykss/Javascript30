const users = [
    {
        name : 'roto',
        type : 'human'
    },
    {
        name : 'nana',
        type : 'cat'
    },
    {
        name : 'chai',
        type : 'cat'
    }
]

function printCats() {
    users.forEach(user => {
        if(user.type === 'cat'){
            console.log(user.name);
        }
    })
}

printCats();