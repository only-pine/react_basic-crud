import React, { Component } from 'react';

class App2 extends Component {
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
                {
                    boards.map(function(list){
                        return list.no + list.writer;
                    })
                }
            </div>
        )
    }
}

export default App2;