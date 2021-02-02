import React, {useState, useEffect} from 'react';
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";
import {AppContainer, AppTitle} from './App.styles';

const App = () => {
    const [search, setSearch] = useState("");
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState([]);

    useEffect(() => {
        const fetchMonsters = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const responseMonsters = await response.json();
            setMonsters(responseMonsters);
        }
        fetchMonsters();
    }, [setMonsters]);

    useEffect(() => {
        const filterMonsters = monster => {
            const name = monster.name.toLowerCase();
            const email = monster.email.toLowerCase();

            return name.includes(search) || email.includes(search);
        }

        setFilteredMonsters(monsters.filter(filterMonsters))
    }, [search, monsters])


    return (
        <AppContainer>
            <AppTitle>Monsters Rolodex</AppTitle>
            <SearchBox
                placeholder="search monsters"
                handleSearchChange={(search) => setSearch(search.toLowerCase())}
            />
            <CardList monsters={filteredMonsters}/>
        </AppContainer>
    );

}

export default App;