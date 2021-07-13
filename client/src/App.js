import React from 'react';
import axios from 'axios';
import Cows from './components/Cows'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cows: []
        };
        // this.fetchData = this.fetchData.bind(this);
    }

    fetchData = () => {
        axios.get('/api/cows')
        .then(res => {
            const cows = res.data;
            this.setState({ cows })
        })
        .catch(err => {
            console.error(err)
        });
    }

    componentDidMount() {
       this.fetchData();
    }

    render() {
        return (
            <>
                <h1>Hello World!!!</h1>
                 <Cows cows={this.state.cows}/>
            </>
        )
    }
}

export default App;