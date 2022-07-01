class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({ mode: "open" });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML = `
            <style>
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }
                :host {
                    display: block;
                    width: 100%;
                    background-color: #456;
                    color: white;
                    text-align: center;
                    font-size: 20px;
                    height: 60px;
                    line-height: 60px;
                }
                @media screen and (max-width: 670px) {
                    :host {
                        font-size: 16px;
                        height: 50px;
                        line-height: 50px;
                    }
                }
            </style>
            <h2>FootballPlayer - Apps</h2>
        `;
    }
}

customElements.define("app-bar", AppBar);