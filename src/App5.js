import React, { Component } from 'react';

class App5 extends Component {
    constructor(props) {
        super(props);
        this.child = React.createRef();
    }

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

    //저장
    handleSaveData = (data) => {
        let boards = this.state.boards;
        if( data.no === null || data.no === '' || data.no === undefined ){  //INSERT
            this.setState({
                maxNo : this.state.maxNo + 1,
                boards : boards.concat({ no: this.state.maxNo, date: new Date(), writer: data.writer, title: data.title })
            })
        }
        else{   //UPDATE
            this.setState({
                boards: boards.map(row => data.no === row.no ? {...data}: row)
            })
        }

    }

    //삭제
    handleRemove = (no) => {
        this.setState({
            boards: this.state.boards.filter(row => row.no !== no)
        })
    }

    //선택
    handleSelectRow = (row) => {
        this.child.current.handleSelectRow(row);
    }


    render() {
        const { boards } = this.state;

        return (
            <div>
                <BoardForm onSaveData={this.handleSaveData} ref={this.child} />
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
                                (<BoardItem key={list.no} row={list} onRemove={this.handleRemove} onSelectRow={this.handleSelectRow} />)
                            )
                        }
                    </tbody>
                </table>
            </div>
        );
    }
}

//입력창
class BoardForm extends Component {
    state = {
        writer: '',
        title: '',
    }

    //변경
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }

    //선택
    handleSelectRow = (row) => {
        this.setState(row);
    }

    //저장
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.onSaveData(this.state);
        this.setState({
            no: '',
            writer: '',
            title: '',
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" name="title" value={this.state.title} onChange={this.handleChange}/>
                <input placeholder="name" name="writer" value={this.state.writer} onChange={this.handleChange}/>
                <button type="submit">SAVE</button>
            </form>
        );
    }
};

//목록
class BoardItem extends Component {
    //삭제
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.no);
    }

    //선택
    handleSelectRow = () => {
        const { row, onSelectRow } = this.props;
        onSelectRow(row);
    }
    
    render() {
        return (
            <tr align="center">
                <td>{this.props.row.no}</td>
                <td><a onClick={this.handleSelectRow}>{this.props.row.title}</a></td>
                <td>{this.props.row.writer}</td>
                <td>{this.props.row.date.toLocaleDateString('ko-KR')}</td>
                <td><button onClick={this.handleRemove}>X</button></td>
            </tr>
        );
    }
}

export default App5;