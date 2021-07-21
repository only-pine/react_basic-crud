import React, { Component } from 'react';

class App3 extends Component {
    state = {
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

    render() {
        const { boards } = this.state;

        return (
            <div>
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

class BoardItem extends React.Component {
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

//state : 자기 자신 것
//props : 부모로부터 받은 것
export default App3;