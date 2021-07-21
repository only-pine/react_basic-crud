import React, { Component } from 'react';
import BoardForm from './BoardForm';
import BoardItem from './BoardItem';

class App6 extends Component {
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
        ],
        selectedBoard : {}  //선택된 행의 데이터
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

    //행 삭제
    handleRemove = (no) => {
        this.setState({
            boards: this.state.boards.filter(row => row.no !== no)
        })
    }

    //행 선택
    handleSelectRow = (row) => {
        this.setState({
            selectedBoard : row
        });
    }


    render() {
        const { boards, selectedBoard } = this.state;

        return (
            <div>
                <BoardForm selectedBoard={selectedBoard} onSaveData={this.handleSaveData} />
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

export default App6;