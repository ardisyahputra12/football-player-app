import "./player-item.js";

class PlayerList extends HTMLElement {
    set players(players) {
        this._players = players;
        this.render();
    }

    render() {
        this.innerHTML = "";
        this._players.forEach(player => {
            const playerItem = document.createElement("player-item");
            playerItem.player = player;
            this.appendChild(playerItem);
        })
    }

    renderError(message) {
        this.innerHTML = `
            <style>
                .error {
                    font-weight: lighter;
                    color: rgba(0, 0, 0, 0.5);
                    -webkit-user-select: none;
                    -moz-user-select: none;
                    -ms-user-select: none;
                    user-select: none;
                    padding: 0 20px;
                    text-align: center;
                }
            </style>
            <h3 class="error">${message}</h3>
        `;
    }
}

customElements.define("player-list", PlayerList);