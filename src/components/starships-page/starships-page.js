import React from 'react';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import { SwapiServiceConsumer } from '../swapi-service-context';
import { withRouter } from 'react-router-dom';

import './starships-page.css';

const StarshipsPage = ({ history, match }) => {
    const showStarshipsName = (i) => {
        return (
            <React.Fragment>
                {i.name}
                <span className="population"> {i.model} </span>
            </React.Fragment>)
    }
    const itemList = (
        <SwapiServiceConsumer>
            {({ getAllStarships }) => {
                return (
                    <ItemList
                        onItemClick={(id) => history.push(id)}
                        getData={getAllStarships} >
                        {showStarshipsName}
                    </ItemList>
                )
            }
            }
        </SwapiServiceConsumer>
    )
    const starshipDetails = (
        <SwapiServiceConsumer>
            {({ getStarship, getStarshipImage }) => {
                return (
                    <ItemDetails id={match.params.id}
                        getSwapi={getStarship}
                        getImageUrl={getStarshipImage}>
                        <Record label={'Model'} field={'model'} />
                        <Record label={'Was made'} field={'manufacturer'} />
                        <Record label={'Costs'} field={'costInCredits'} />
                        <Record label={"It's length"} field={'length'} />
                        <Record label={'Has crew'} field={'crew'} />
                        <Record label={'Max passengers'} field={'passengers'} />
                    </ItemDetails>
                )
            }
            }
        </SwapiServiceConsumer>
    )
    return (
        <ErrorBoundry>
            <Row left={itemList} right={starshipDetails} />
        </ErrorBoundry>
    )
}
export default withRouter(StarshipsPage);