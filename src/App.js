import './App.css';
import {Component} from "react/cjs/react.production.min";
import {CardList} from "./components/card-list/card-list.component";
import {SearchBox} from "./components/search-box/search-box.component";

class App extends Component {

    constructor() {
        super();

        this.state = {
            search : "",
            monsters: []
        };

        // Alternate binding method
        // this.handleSearchChange2 = this.handleSearchChange2.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(monsters => this.setState({monsters}))
    }

    handleSearchChange = (search) => {
        this.setState({search});
    }

    // Alternate binding method
    // handleSearchChange2(search) {...}

    filterMonsters = monster => {
        const search = this.state.search.toLowerCase();
        const name = monster.name.toLowerCase();
        const email = monster.email.toLowerCase();

        return name.includes(search) || email.includes(search);
    }

    render() {
        const {monsters} = this.state;
        const filteredMonsters = monsters.filter(this.filterMonsters);

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder="search monsters"
                    handleSearchChange={this.handleSearchChange}
                />
                <CardList monsters={filteredMonsters}/>
            </div>
        );
    }
}

export default App;
