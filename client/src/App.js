import React from 'react';
import axios from 'axios';
import Cows from './components/Cows'
import Add from './components/Add'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cows: []
            // newCow: {
            //     name: '',
            //     description: ''
            // }
        };
        // this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount() {
       this.fetchData();
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


    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
    }

    // handleSubmit = (e) => {

    // }

    handleAdd = (name, description) => {
        axios.post('/api/cows', {name, description})
            .then(res => {
                let newCows = res.data;
                // this.setState({ cows: newCows })
                this.fetchData();
            })
            .catch(err => {
                console.log(err);
            });
        // console.log('handleAdd: ', name, description )
        // const newCows = [...this.state.cows, { name, description  }];
        // console.log(newCows)
        // this.setState({newCows})
    }

    render() {
        return (
            <>
                <h1>Hello World!!!</h1>
                 <Add onSubmit={this.handleAdd} />
                 <Cows cows={this.state.cows}/>
            </>
        )
    }
}

export default App;