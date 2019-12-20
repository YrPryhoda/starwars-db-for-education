//new class
export default class SwapiService {
    //url for ajax request
    _apiBase = 'https://swapi.co/api';
    _imageBase = `https://starwars-visualguide.com/assets/img/`;
    // func conneting to url and return promise => json answer
    getResource = async (url) => {
        // async-await provide executing asynchronous func as synchronous
        const res = await fetch(`${this._apiBase}${url}`); //response in shape of promise
        //check if connect is OK (result 2xx)
        if (!res.ok) {
            //if not ok - create a Error with explanation
            throw new Error(`Could not fatch url`)
        }
        //return json data from url
        return res.json(); //json file
    }

    getAllPeople = async () => {
        // res = json
        const res = await this.getResource(`/people/`);
        // get array
        return res.results.map(this._transformPeople);
    }
    getAllPlanets = async () => {
        // res = json
        const res = await this.getResource(`/planets/`);
        // get array
        return res.results.map(this._transformPlanet);
    }
    getPlanet = async (id) => {
        //get obj
        const planet = await this.getResource(`/planets/${id}/`);
        return this._transformPlanet(planet);
    }
    getPerson = async (id) => {
        //get json
        const person = await this.getResource(`/people/${id}/`);
        return this._transformPeople(person);
    }
    getAllStarships = async () => {
        // res = promise
        const res = await this.getResource(`/starships/`);
        // get json
        return res.results.map(this._transformStarships);
    }
    getStarship = async (id) => {
        //get json
        const ship = await this.getResource(`/starships/${id}/`);
        return this._transformStarships(ship);
    }

    _extractId(item) {
        const idRegExp = /\/([0-9]*)\/$/;
        return item.url.match(idRegExp)[1];
    }
    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }
    _transformStarships = (ship) => {
        return {
            id: this._extractId(ship),
            name: ship.name,
            model: ship.model,
            manufacturer: ship.manufacturer,
            costInCredits: ship.cost_in_credits,
            length: ship.length,
            crew: ship.crew,
            passengers: ship.passengers,
        }
    };
    _transformPeople = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color
        }
    };

    getPersonImage = ({id}) => {
return (`${this._imageBase}characters/${id}.jpg`)
    }
    getPlanetImage = ({id}) => {
return (`${this._imageBase}planets/${id}.jpg`)
    }
    getStarshipImage = ({id}) => {
return (`${this._imageBase}starships/${id}.jpg`)
    }
} //class
//create a template of class
//call clas=>method (return json) -> then pull array from json -> by cycle forEach get names

