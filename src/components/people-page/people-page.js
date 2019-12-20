import React from 'react';
import ItemList from '../item-list';
import ItemDetails, { Record } from '../item-details';
import ErrorBoundry from '../error-boundry';
import Row from '../row';
import './people-page.css';
import { SwapiServiceConsumer } from '../swapi-service-context';
import { withRouter } from 'react-router-dom';

const PeoplePage = ({ history, match }) => {
    const showName = (i) => {
        return (
            <React.Fragment>
                {i.name}
                <span className="birth"> {i.birthYear} </span>
            </React.Fragment>)
    }
    const itemList = (
        <SwapiServiceConsumer>
            {({ getAllPeople }) => {
                return (
                    <ItemList onItemClick={(id) => history.push(id)}
                        getData={getAllPeople} >
                        {showName}
                    </ItemList>
                )
            }}
        </SwapiServiceConsumer>);

    const personDetails = (
        <SwapiServiceConsumer>
            {({ getPerson, getPersonImage }) => {
                return (
                    <ItemDetails id={match.params.id}
                        getSwapi={getPerson}
                        getImageUrl={getPersonImage} >
                        <Record label={'Gender'} field={'gender'} />
                        <Record label={'Was born'} field={'birthYear'} />
                        <Record label={'Eyes color'} field={'eyeColor'} />
                    </ItemDetails>
                )
            }}
        </SwapiServiceConsumer>);
    return (
        <ErrorBoundry>
            <Row
                left={itemList}
                right={personDetails} />
        </ErrorBoundry>
    )
}

export default withRouter(PeoplePage);