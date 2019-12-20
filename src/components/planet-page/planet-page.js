import React from 'react';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { SwapiServiceConsumer } from '../swapi-service-context';
import './planet-page.css';
import { withRouter } from 'react-router-dom';

const PlanetPage = ({ history, match }) => {
    const showPlanetName = (i) => {
        return (
            <React.Fragment>
                {i.name}
                <span className="model"> {i.population} </span>
            </React.Fragment>)
    }
    const itemList = (
        <SwapiServiceConsumer>
            {({ getAllPlanets }) => {
                return (
                    <ItemList onItemClick={(id) => history.push(id)}
                        getData={getAllPlanets} >
                        {showPlanetName}
                    </ItemList>
                )
            }
            }
        </SwapiServiceConsumer>
    );
    const planetDetails = (
        <SwapiServiceConsumer>
            {({ getPlanet, getPlanetImage }) => {
                return (
                    <ItemDetails id={match.params.id}
                        getSwapi={getPlanet}
                        getImageUrl={getPlanetImage}>
                        <Record label={'Population'} field={'population'} />
                        <Record label={'Rotation period'} field={'rotationPeriod'} />
                        <Record label={'Diameter'} field={'diameter'} />
                    </ItemDetails>
                )
            }}
        </SwapiServiceConsumer>
    );
    return (
        <ErrorBoundry>
            <Row
                left={itemList}
                right={planetDetails}
            />
        </ErrorBoundry>

    )
}
export default withRouter(PlanetPage);