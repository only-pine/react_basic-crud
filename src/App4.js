import React, { Component } from 'react';

class App4 extends Component {
    state = {
        maxNo : 3,
        boards : [
            {
                no: 1,
                writer: 'hansol',
                title: 'react',
                date: new Date(),
            },
            {
                no: 2,
                writer: 'aniss',
                title: 'java',
                date: new Date(),
            },
        ]
    }

    handleSaveData = (data) => {
        this.setState({
            maxNo : this.state.maxNo + 1,
            boards : this.state.boards.concat({ no : this.state.maxNo, date : new Date(), ...data })
        });
    }


    render() {
        const { boards } = this.state;

        return (
            <div>
                <BoardForm onSaveData={this.handleSaveData}/>
                <table border="1">
                    <tbody>
                        <tr align="center">
                            <td width="50">No</td>
                            <td width="300">Writer</td>
                            <td width="100">Title</td>
                            <td width="100">Date</td>
                        </tr>
                        {
                            boards.map(list =>
                                (<BoardItem key={list.no} row={list}/>)
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

class BoardItem extends Component {
    render() {
        return (
            <tr align="center">
                <td>{this.props.row.no}</td>
                <td>{this.props.row.title}</td>
                <td>{this.props.row.writer}</td>
                <td>{this.props.row.date.toLocaleDateString('ko-KR')}</td>
            </tr>
        );
    }
}

class BoardForm extends Component {
    state = {}

    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" name="title" onChange={this.handleChange}/>
                <input placeholder="name" name="writer" onChange={this.handleChange}/>
                <button type="submit">SAVE</button>
            </form>
        );
    }
};

export default App4;