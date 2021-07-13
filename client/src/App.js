import React from 'react';
import Cows from './components/Cows'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cows: []
        };
    }

    componentDidMount() {
        console.log('ssss')
        fetch('/api/cows')
            .then(res => res.json())
            .then(result => {
                console.log('xxx ', result)
            })
            .catch(err => {
                console.error(err)
            });
    }

    render() {
        return (
            <>
                <h1>Hello World!!!</h1>
                 <Cows />
            </>
        )
    }
}

export default App;