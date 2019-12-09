const users  = require("../data/index");

//created sampleuser to grab user data from sampleUser.js
const sampleUser = require("../data/sampleUser");

//created listUsers to list all the users in the array
const listUsers = (req, res) => {
    res.json(users);
};

//created showUser to show the user that is selected based off the id in the users/:id, return 404 if not found
const showUser = (req, res) => {
const id = req.params.id;
const match = users.find(users => users.id === Number(id));

if(match){
    res.json(match);
}else {
    res.status(404).json({msg: `No member found with ID ${id}`});
}
};

//created createUser to create the user based off the sample users from the sampleUser.js file
const createUser = (req, res) => {
let id = users.length + 1;
const sampleUserWithAutoIncrementID = {
    id: id,
    ...sampleUser
}
users.push(sampleUserWithAutoIncrementID);
};

//created updateUser to update a users based off their id. If nothing is update, the info stays the same. 
//Only updates changed fields. returns 400 status if user not found
const updateUser = (req, res) => {
let id = req.params.id;
let match = users.find(users => users.id === Number(id));

if(match){
    const updateUser = req.body;
    users.forEach(users => {
        if(users.id === Number(id)){
            users.name = updateUser.name ? updateUser.name : users.name,
            users.username = updateUser.username ? updateUser.username : users.username,
            users.email= updateUser.email ? updateUser.email : users.email,
            users.address.street = updateUser.address.street ? updateUser.address.street : users.address.street,
            users.address.suite = updateUser.address.suite ? updateUser.address.suite : users.address.suite,
            users.address.city = updateUser.address.city ? updateUser.address.city : users.address.city,
            users.address.zipcode = updateUser.address.zipcode ? updateUser.address.zipcode : users.address.zipcode,
            users.address.geo.lat = updateUser.address.geo.lat ? updateUser.address.geo.lat : users.address.geo.lat,
            users.address.geo.lng = updateUser.lng ? updateUser.lng : users.address.geo.lng,
            users.phone = updateUser.phone ? updateUser.phone : users.phone,
            users.website = updateUser.website ? updateUser.website : users.website,
            users.company.name = updateUser.company.name ? updateUser.company.name : users.company.name,
            users.company.catchPhrase = updateUser.company.catchPhrase ? updateUser.company.catchPhrase : users.company.catchPhrase,
            users.company.bs = updateUser.company.bs ? updateUser.company.bs : users.company.bs
            res.json({msg: 'Member was updated!', users});
        }
    })
} else{
    res.status(400).json({msg: `No member found with ID ${id}`});  
}
};

//created deleteUser from the array based off of the id in users/:id that gets inputed and gives message that user deleted.
//If no user found, status code of 400 is returned.
const deleteUser = (req, res) => {
    let id = req.params.id;

    let match = users.find(users => users.id === Number(id));

    if(match){
        res.json({msg: 'Member has been deleted!', users: users.filter(users => users.id != Number(id))});
    }else {
        res.status(400).json({msg: `No member found with ID ${id}`});
    }
};

//Exports the listUsers, showUser, createUser, updateUser, deleteUser so they can be used in the routes js file
module.exports = {listUsers, showUser, createUser, updateUser, deleteUser};
