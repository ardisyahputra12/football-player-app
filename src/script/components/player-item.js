class PlayerItem extends HTMLElement {
    set player(player) {
        this._player = player;
        this.render();
    }

    render() {
        const strThumb = this._player.strThumb;
        const strPlayer = this._player.strPlayer;
        const strTeam = this._player.strTeam;
        const strDescriptionEN = this._player.strDescriptionEN;
        const strNationality = this._player.strNationality;
        const strSport = this._player.strSport;

        if (strThumb == null || strPlayer == null || strTeam == null || strDescriptionEN == null || strNationality == null || strSport !== "Soccer") {
            return this.remove();
        }

        this.innerHTML = `
            <style>
                .playerItem {
                    display: inline-block;
                }
                .card {
                    width: 220px;
                    height: 300px;
                    overflow: hidden;
                    margin: 0 auto;
                    border-radius: 20px 0 20px 0;
                    cursor: pointer;
                }
                .card:hover {
                    opacity: 0.8;
                    box-shadow: 0 0 8px #456;
                }
                .card .card-image img {
                    border-radius: 20px 0 0 0;
                }
                .card .card-content {
                    text-align: center;
                    padding: 10px;
                }
                h2,
                h3 {
                    margin: 0;
                }
                .playerDesc {
                    display: none;
                    z-index: 20;
                    position: fixed;
                    overflow: scroll;
                    top: 0;
                    bottom: 0;
                    right: 0;
                    left: 0;
                    background-color: rgba(70, 70, 70, 0.8);
                    cursor: pointer;
                }
                .playerDesc .playerContainer {
                    width: 60%;
                    margin: 0 auto;
                    padding: 30px 30px 100px;
                    text-align: center;
                    background-color: #fff;
                    cursor: default;
                }
                .playerDesc .playerContainer .image img {
                    width: 70%;
                }
                .playerDesc .playerContainer .content p {
                    margin-top: 10px;
                    font-size: 20px;
                }
                @media screen and (max-width: 1000px) {
                    .playerDesc .playerContainer {
                        width: 80%;
                    }
                }
                @media screen and (max-width: 670px) {
                    .playerDesc .playerContainer {
                        width: 90%;
                        padding: 20px 20px 100px;
                    }
                    .playerDesc .playerContainer .image img {
                        width: 85%;
                    }
                    .playerDesc .playerContainer .content h2 {
                        font-size: 36px;
                    }
                    .playerDesc .playerContainer .content h4 {
                        font-size: 24px;
                    }
                    .playerDesc .playerContainer .content p {
                        font-size: 16px;
                    }
                }
            </style>
            <div class="row playerItem" title="See more">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-image">
                            <img src="${strThumb}">
                        </div>
                        <div class="card-content">
                            <h3 class="card-title">${strPlayer}<br>(${strTeam})</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div class="playerDesc" title="Click anywhere to close">
                <div class="playerContainer">
                    <div class="image">
                        <img src="${strThumb}">
                    </div>
                    <div class="content">
                        <h2>${strPlayer}</h2>
                        <h4>
                            Team: (${strTeam})<br>
                            Nationality: (${strNationality})
                        </h4>
                        <p>${strDescriptionEN}</p>
                    </div>
                </div>
            </div>
        `;

        const playerDesc = () => {
            this.querySelector(".playerDesc").style.display = "block";
        }

        const closePlayerDesc = () => {
            this.querySelector(".playerDesc").style.display = "none";
        }

        this.querySelector(".card").addEventListener("click", playerDesc);
        this.querySelector(".playerDesc").addEventListener("click", closePlayerDesc);
    }
}

customElements.define("player-item", PlayerItem);