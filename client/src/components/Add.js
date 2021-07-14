import React from 'react'

class Add extends React.Component{
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSubmit(e.target.name.value, e.target.description.value)
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name='name' />
                    <input type='text' name='description' />
                    <button type='submit' value="submit">Add</button>
                </form>
            </>
        );
    }
}

export default Add;
