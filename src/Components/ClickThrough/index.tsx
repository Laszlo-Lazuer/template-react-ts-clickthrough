import React, { Component, Fragment } from 'react';


interface Props {
    page?: Number,
    words?: any
};

class ClickThrough extends Component<any,any> {
    constructor(props:Props) {
        super(props);
        this.state = {
            page: 0        }
    }

    // Increase page count to simulate move forward
    countUp = () => {
        this.setState({
            page: this.state.page + 1
        })
    }

    // Decrease page count to simulate move forward
    countDown = () => {
        this.setState({
            page: (this.state.page > 0) ? this.state.page - 1: this.state.page
        })
    }

    render() {
        let words = 'new';
        switch(this.state.page) {
            case(0): words= 'first test'
            break;
            case(1): words= 'second test'
            break;
            case(2): words= 'third test'
            break;
            default: console.log('Overflow!')
            
        }
        return(
            <Fragment>
                <h1>Placeholder</h1>
                <span>Page: {this.state.page}, case: {words}</span>
                <br />
                <button onClick={this.countUp}>+</button>
                <button onClick={this.countDown}>-</button>
            </Fragment>
        );
    }
}

export default ClickThrough;