import React from 'react';
import './random-planet.css';
import SwapiService from '../../services/services';
import Spinner from '../spinner';
import ErrorCatch from '../error-catch'
import PropTypes from 'prop-types';
export default class RandomPlanet extends React.Component {
    static defaultProps = {
        updateInterval: 8000
    };
static propTypes = {
    updateInterval: PropTypes.number
    }


    state = {
        planet: {},
        loading: true,
    };
    swapiService = new SwapiService();

    componentDidMount() {
        const {updateInterval} = this.props;
        this.updatePlanet();
        this.interval = setInterval(this.updatePlanet,  updateInterval);
    }
    componentWillUnmount () {
        clearInterval(this.interval);
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false,
            error: false
        });
    };

    updatePlanet = () => {
        const id = Math.floor(Math.random() * 16 + 2);
        this.swapiService
            .getPlanet(id)
            //json
            .then(this.onPlanetLoaded)
            .catch(this.onError);
    }

    onError = (err) => {
        this.setState({ error: true,
                        loading: false });
    }

    render() {
        const { loading, planet, error } = this.state;

        const hasData = !(loading || error);
        const err = error? <ErrorCatch /> : null ,
              spinner = loading ? <Spinner /> : null,
              showPlanet = hasData ? <ShowPlanet planet={planet} /> : null

        return (
            <div className="  navbar navbar-expand-lg navbar-light bg-light media ">
                {err}
                {spinner}
                {showPlanet}
            </div>
        );
    }
}

const ShowPlanet = ({ planet }) => {
    const { id, name, population, rotationPeriod, diameter } = planet;
    return (
        <React.Fragment>
            <div className="img">
                <img src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} className="mr-3 "
                    alt="planet"
                    onError={() => { document.querySelector('.mr-3').src = './image/template.jpg' }} />
            </div>
            <div className='media-body'>
                <h4 className="text-center">{name}</h4>
                <ul className='list-group mt-0'>
                    <li className='list-group-item'>
                        <span className='term'> Population:</span>
                        <span> {population}</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'> Rotation period:</span>
                        <span> {rotationPeriod} days</span>
                    </li>
                    <li className='list-group-item'>
                        <span className='term'> Diameter:</span>
                        <span> {diameter} km</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}