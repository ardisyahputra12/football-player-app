class SearchPlayer extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set keyupEvent(event) {
        this._keyupEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `
            <style>
                .searchInput {
                    width: 70%;
                    position: sticky;
                    z-index: 10;
                    top: 10px;
                    left: 0;
                    right: 0;
                    margin: 10px auto;
                    border-radius: 10px;
                }
                @media screen and (max-width: 670px) {
                    .searchInput {
                        width: 90%;
                    }
                }
            </style>
            <div class="row searchInput">
                <div class="input-field col s12">
                    <input id="searchElement" type="text">
                    <label for="searchElement">Search football player here</label>
                </div>
            </div>
        `;

        window.onscroll = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                this.querySelector(".searchInput").style.backgroundColor = "rgba(223, 238, 234, 0.9)";
                this.querySelector(".searchInput").style.boxShadow = "0 5px 7px 1px #456";
            } else {
                this.querySelector(".searchInput").style.backgroundColor = "";
                this.querySelector(".searchInput").style.boxShadow = "";
            }
        }

        this.querySelector("#searchElement").addEventListener("keyup", this._keyupEvent);
    }
}

customElements.define("search-player", SearchPlayer);