import React, { Component, Fragment } from 'react';


interface Props {
    page?: number
};

class ClickThrough extends Component<any,any> {
    constructor(props:Props) {
        super(props);
        this.state = {
            page: 0
        }
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
        return(
            <Fragment>
                <h1>Placeholder</h1>
                <span>Page: {this.state.page}</span>
                <button onClick={this.countUp}>+</button>
                <button onClick={this.countDown}>-</button>
            </Fragment>
        );
    }
}

export default ClickThrough;