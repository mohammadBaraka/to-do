import React, { Component } from 'react';
import {add_Reminder,remove_Reminder,clear_Reminder} from '../actions';
import moment from 'moment';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {connect } from 'react-redux';
import logo from './Reminders-icon.png';
 
class App extends Component {   
    state = {
        rext: '' ,
        date: new Date()
    }
render_Reminder = () => {
    const {reminders} = this.props;
    return(
        <ul className="list-group">
            {
                  reminders.map(reminder =>{
                    return(
                        <li key={reminder.id} className="list-group-item">
                                <div>{ reminder.text}</div>
                                <div>{moment(new Date( reminder.date)).fromNow()}</div>
                                <div className="closeIcon btn btn-danger" onClick={() => this.props.remove_Reminder(reminder.id)}>X</div>
                        </li>
                    )
                })
              
            }
        </ul>
    )
   
}

    render() {
    console.log(this.props)
        return(
            <div className="App">
                <img src={logo} />
                <div className="reminder-title">
                    <h2>What Should U Do?</h2>
                </div>
                <input onChange={(e)=>{ 
                    this.setState({text:e.target.value})}} className="form-control" type="text" value={this.state.text} placeholder="    Enter What U Think... ?" />
                                    <DatePicker
                                    className="form-control"
                                    selected={this.state.date}
                                        selected={this.state.date}
                                        onChange={(date)=> this.setState({date:date})}
                                        showTimeSelect
                                        timeFormat="HH:mm"
                                    dateFormat="MMMM d, yyyy h:mm aa"
                                        timeCaption="time"
                                    />
                <button onClick={()=>{
                     this.props.add_Reminder(this.state.text , this.state.date)
                      this.setState({text:'' , date: ''})
                    }}
                className="btn btn-primary  btn-block" >Add Reminder</button>
                {this.render_Reminder()}
                 <button onClick={() => this.props.clear_Reminder()} className=" cleaerReminder btn btn-danger btn-block" >Clear Reminder</button>
              
            </div>
        )
    }
};


export default connect(state  => {
    return{
        reminders: state
    }
} , {add_Reminder,remove_Reminder,clear_Reminder})  (App)