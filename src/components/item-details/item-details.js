import React from 'react';
import './item-details.css';
 
const Record = ({ item, field, label }) => {
    return (<li className="underline list-group-item">{label}: {item[field]}</li>)

}
export { Record }

export default class ItemDetails extends React.Component {
    // local state props
    state = {
        item: null, //object
        image: null //string
    }
    // when component appears id DOM ferst time
    componentDidMount() {
        this.itemDetails();
    }
    // when we update local state props, DidUpdate fucn must be called
    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.itemDetails();
        }
    }
    // When PersonId !== null (get from App.js), calls fetch for detail info about person ${id}
    itemDetails = () => {
        const { id, getSwapi, getImageUrl } = this.props;
        if (!id) {
            return;
        }
        getSwapi(id)        //obj
            .then((item) => {   
                this.setState({
                    item,
                    image: getImageUrl(item)
                });
            });
    }
    render() {
        if (!this.state.item) {
            return (
                <div className='navigation align-middle  navbar navbar-expand-lg navbar-light bg-light media'>
                    <p className='info'>
                        Select a one of points from list for details
                </p>
                </div>)
        }
        const { image, item } = this.state;
        const { name } = this.state.item;
        return (
            <div className="  navbar navbar-expand-lg navbar-light bg-light media ">
                <div className='img'>
                    <img className="avatar mr-3" src={image} alt="" 
                         onError={() => { document.querySelector('.avatar').src = './image/template.jpg' }} />
                </div>
                <div className='media-body'>
                    <h4 className='text-center'> {name}</h4>
                    <ul className="  list-group  mt-0">
                        {
    //this.props.children = array of 3 objects
                            React.Children.map(this.props.children, (child) => {
                                return React.cloneElement(child, { item });
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}