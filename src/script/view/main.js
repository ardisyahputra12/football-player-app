import "../components/player-list";
import "../components/search-player.js";

class Data {
    static searchPlayer(keyword) {
        return fetch(`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.player) {
                    return Promise.resolve(responseJson.player);
                } else {
                    return Promise.reject(`Oops "${keyword}" is not found. Please check player name!`);
                }
            })
    }
}

const main = () => {
    const searchPlayerElement = document.querySelector("search-player");
    const playerListElement = document.querySelector("player-list");

    const eventSearch = () => {
        Data.searchPlayer(searchPlayerElement.value)
            .then(renderResult)
            .catch(fallbackResult)
    };

    const renderResult = results => {
        playerListElement.players = results;
    }

    const fallbackResult = message => {
        playerListElement.renderError(message);
    }

    searchPlayerElement.keyupEvent = eventSearch;
}

export default main;