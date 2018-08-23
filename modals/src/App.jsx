import React, { Component } from 'react';
import Modal from './Modal';
import styled from 'styled-components'

class App extends Component {
    state = {
        openModal: false
    }

    handleToggleModal =()=> {
        this.setState({openModal: !this.state.openModal})
    }

    render() {
        return (
            <Home>
                <p styles={{margin:0}}>I am some content</p>
                <button onClick={this.handleToggleModal}>Open Modal</button>
                {this.state.openModal && (<Modal handleToggleModal={this.handleToggleModal} />
            )}
            </Home>
        );
    }
}

const Home = styled.div`
    height: 100vh;
    width: 100%;
    background-color: lightblue;
    position: relative;
`;

export default App;