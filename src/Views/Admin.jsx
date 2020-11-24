
import React, { Component } from 'react';

//Components
import Title from '../Components/Title';

class Admin extends Component {

  constructor(props) {
    super(props); 
    this.state = {
      title: 'Admin',
      subtitle: 'IPC Indicator'
    }
  }


  render() {
    let { title, subtitle } = this.state;

    return (
        <div>
            <Title title = { title } subtitle = { subtitle } />
            Login
        </div>
    )
  }
}

  export default Admin;
  

