import React, { Component } from 'react';

class BoardRow extends Component {
    //행 삭제
    handleRemove = () => {
        const { row, onRemove } = this.props;
        onRemove(row.no);
    }

    //행 선택
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

export default BoardRow;