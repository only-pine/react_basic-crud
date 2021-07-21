import React, { Component } from 'react';

class App1 extends Component {
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
        const list = boards.map(function(list){
            return list.no + list.writer;
        });

        return (
            <div>
                {list}
            </div>
        )
    }
}

export default App1;