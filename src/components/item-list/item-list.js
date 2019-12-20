import React from 'react';
import Spinner from '../spinner';
import './item-list.css';

export default class ItemList extends React.Component {
    state = {
        itemList: null,
        loading: true
    }
    componentDidMount() {
        const { getData } = this.props;
        getData()
            .then((itemList) => { this.setState({ itemList }) })
    }
    showDetails = (id) => {
        this.props.onItemClick(id);
    }
    renderPeople(arr) {
        return arr.map((item) => {
            const { id } = item;
            const val = this.props.children(item);
            return (
                <li className="point list-group-item list-group-item-action"
                    key={(Math.random()*300)+(Math.random()*250)}
                    onClick={() => { this.showDetails(id) }}>
                    {val}
                </li>);
        });
    }
    render() {
        const { itemList } = this.state;
        if (!itemList) {
            return <Spinner />
        }
        const people = this.renderPeople(itemList);
        return (
            <ul className="list-group">
                {people}
            </ul>
        );
    }
}