import React from 'react';

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
                <div className='Online__Controller'>
                    <button type='button' onClick={this.handleOnline}>Go online</button>
                    <button type='button' onClick={this.handleOffline}>Go offline</button>
                </div>
            </div>
        )
    }
}

export default Contact;