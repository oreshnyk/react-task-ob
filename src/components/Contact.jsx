import React from 'react';
import Controls from './Controls';

class Contact extends React.Component {

    static defaultProps = {
        name: 'test ',
        surname: 'test ',
        email: 'test ',
        onlineStatus: false,
    }

    state = {
        isOnline: this.props.onlineStatus,
    };

    handleOnline = () => {
        this.setState({
            isOnline: true,
        })
    };

    handleOffline = () => {
        this.setState({
            isOnline: false,
        })
    };
    
    render() {
        return (
            <div className='Contact'>
                <span>
                    Name: {this.props.name} 
                </span>
                <span>
                    Surname: {this.props.surname}
                </span>
                <span>
                    Email: {this.props.email}
                </span>
                <span className='Contact_status'>
                    Contact status: {this.state.isOnline ? 'ONLINE' : 'OFFLINE'}
                </span>
                
                <Controls 
                    handleOnline={this.handleOnline}
                    handleOffline={this.handleOffline}
                />
            </div>
        )
    }
}

export default Contact;