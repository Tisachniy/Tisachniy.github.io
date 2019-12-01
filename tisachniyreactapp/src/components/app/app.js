import React, {Component} from 'react';
import Navbar from '../navbar';
import MainPage from '../mainPage';
import Footer from '../footer';

export default class app extends Component {

    state = {
        navBarData: [
          { label: 'Main', id: 1 },
          { label: 'Info', id: 2 },
          { label: 'ToDo', id: 3 },
          { label: '...', id: 4}
        ],
        user:[
          {label: 'Alex', id:5, score:"5"},
          {label: 'Mark', id:6, score:"3"},
          {label: 'Both', id:7, score:"4"}
        ]
      };

      deleteItem = (id) => {

        this.setState(({user}) => {
          const idx = user.findIndex((el) => el.id === id);
          console.log("idx " + idx);

          //[a, b, c, d, e]
          //[a, b,  d, e]
          const before = user.slice(0, idx);
          const after = user.slice(idx + 1);

          const newArray = [...before, ...after];
          return{
            user: newArray
          }
        });
      };



    render(){
        return (
            <div>
                <Navbar
                navbarTitle={this.state.navBarData}/>
                <MainPage
                userInfo={this.state.user}
                onDeleted={ this.deleteItem}/>
                <Footer/>
            </div>
        );
      };
};

