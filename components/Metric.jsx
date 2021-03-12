/// @ts-check
import { Component } from "react";
import { EventEmitter } from "../common/EventEmitter";

let data = [];
let changeMetricEvent = new EventEmitter();

export class Metric extends Component {
    static add(obj) {
        data.unshift(obj);
        data = data.slice(0, 20);
        changeMetricEvent.emit(data);
    }

    state = {
        metrics: data.slice()
    };
    changeSubscription = null;

    componentDidMount() {
        this.changeSubscription = changeMetricEvent.subscribe((metrics) => {
            this.setState({ metrics });
        })
    }
    componentWillUnmount() {
        this.changeSubscription.unsubscribe();
    }

    render() {
        return (
            <>
                <style jsx>{`
                    table{
                        width: 100%;
                        max-width: 100%;
                        margin-bottom: 1rem;
                        background-color: transparent;
                    }
                    table td, table th {
                        padding: .3rem;
                        vertical-align: top;
                        border-top: 1px solid #dee2e6;
                    }
                `}</style>
                <table>
                    <tbody>
                    <tr>
                        <th>page</th>
                        <th>name</th>
                        <th>value</th>
                    </tr>
                        {this.state.metrics.map((m, i) => {
                            return (
                                <tr key={`${m.name}-${m.value}-${i}`}>
                                    <td>{m.page}</td>
                                    <td>{m.name}</td>
                                    <td>{m.value.toFixed(2)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </>
        )
    }
}

// export const metrics = new Metric();