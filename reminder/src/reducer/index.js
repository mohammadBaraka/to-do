import {Add_Reminder, Remove_Reminder, Clear_Reminder} from '../reducer/types';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminders =  (state=[] , action) => {
    let reminders = null ;
state = read_cookie('All')  

    if (action.type === Add_Reminder  ){
        reminders =  [...state ,{text:action.text , date:action.date , id : Math.random()}]
        bake_cookie("All",reminders)
        return reminders
    }
    else if (action.type=== Remove_Reminder){
        reminders= state.filter(reminder  => reminder.id !== action.id)
        bake_cookie("All",reminders)
        return reminders
    }
    else if (action.type===Clear_Reminder) {
        bake_cookie("All",reminders)
        reminders = []

        return reminders
    }
    else{
        return state
    }
} 


export default reminders;
