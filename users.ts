import {userService} from "./services";

userService.getAll().then(value => console.log(value.data[0].username))

userService.getById(2).then(({data})=> console.log(data.address.city))