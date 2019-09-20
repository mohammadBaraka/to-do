import {Add_Reminder, Remove_Reminder, Clear_Reminder}from '../reducer/types';

export const add_Reminder = (text,date) => {
const action = {
    type : Add_Reminder,
    text : text ,
    date : date 
}
console.log("Add", action)
return action
}

export const remove_Reminder = (id) => {
    const action = {
        type: Remove_Reminder,
         id
    }
    console.log("Remove" ,action) 
    return action
}

export const clear_Reminder = () => {
    const action ={ 
        type:Clear_Reminder
    }
    return action
}