import React, { Component } from 'react';

class BoardForm extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        let selectedBoard = nextProps.selectedBoard;
        if( !selectedBoard.no ){
            this.title.value = '';
            this.writer.value = '';
            return true;
        }

        this.title.value = selectedBoard.title;
        this.writer.value = selectedBoard.writer;
        return true;
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let selectedBoard = this.props.selectedBoard;
        let data = {
            writer: this.writer.value,
            title: this.title.value,
        }

        if( selectedBoard.no ){
            data.no = selectedBoard.no;
            data.date = selectedBoard.date;
        }

        this.props.onSaveData(data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input placeholder="title" ref={node => this.title = node}/>
                <input placeholder="name" ref={node => this.writer = node}/>
                <button type="submit">SAVE</button>
            </form>
        );
    }
}

export default BoardForm;