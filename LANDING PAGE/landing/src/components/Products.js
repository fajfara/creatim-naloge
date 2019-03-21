import React, { Component, Fragment } from 'react';
import placeholder from '../img/placeholder.png';
import uuidv4 from 'uuid';

export class Products extends Component {
    constructor(props) {
        super(props);

        // State
        this.state = {
            error: false,
            loading: false,
            produkti: [],
            katClicked: false
        };

        // Scroll event
        window.onscroll = () => {
            const {
                loadProducts,
                state: {
                    error,
                    loading,
                    katClicked
                },
            } = this;

            // Check če je error, če nalaga oz. če je kategorija gumb kliknjen
            if (error || loading || katClicked) return;
            // Preverjanje če je scroll že skoraj na koncu strani
            if (
                this.getDocHeight() - 10 <= this.getScrollXY()[1] + window.innerHeight
            ) {
                loadProducts();
            }
        };
    }

    // Koda za preverjanje če je user pred koncem strani
    // Source: https://stackoverflow.com/questions/22268079/how-to-do-infinite-scrolling-with-javascript-only-without-jquery
    getScrollXY() {
        var scrollX = 0, scrollY = 0;
        if (typeof (window.pageYOffset) == 'number') {
            scrollY = window.pageYOffset;
            scrollX = window.pageXOffset;
        } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
            scrollY = document.body.scrollTop;
            scrollX = document.body.scrollLeft;
        } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
            scrollY = document.documentElement.scrollTop;
            scrollX = document.documentElement.scrollLeft;
        }
        return [scrollX, scrollY];
    }

    getDocHeight() {
        var D = document;
        return Math.max(
            D.body.scrollHeight, D.documentElement.scrollHeight,
            D.body.offsetHeight, D.documentElement.offsetHeight,
            D.body.clientHeight, D.documentElement.clientHeight
        );
    }

    /////////////////////////////////////////////////////////////////////////////////////////////////

    // Naloži 8 izdelkov
    componentWillMount = () => {
        this.loadProducts();
        this.loadProducts();
    }

    // funkcija ki se sproži ob kliku na kategorija gumb
    naloziKategorijo = () => {
        if(this.state.katClicked){
            this.setState({
                katClicked: false,
                produkti: []
            });
            this.loadProducts();
            this.loadProducts();
            
            return;
        }

        this.setState({
            katClicked: true,
            produkti: []
        });

        this.loadProducts();

    }


    // Funkcija za generiranje unique id-ja za vsak produkt, vsak produkt rabi unique key
    generateKey() {
        return uuidv4();
    }

    // Naloži produkte
    loadProducts = () => {
        this.setState({ loading: true }, () => {
            // Uploadal json file na github, simuliram get request
            fetch("https://raw.githubusercontent.com/fajfara/api-produkti/master/db.json")
                .then(response => {
                    return response.json()
                })
                .then((data) => {

                    let localProdukti = [];
                    // Izbira samo 4ih produktov: index < 4
                    for (let index = 0; index < 4; index++) {
                        // Izberi random index
                        let randomIndex = Math.floor(Math.random() * data.produkti.length);

                        const element = data.produkti[randomIndex];
                        // Shrani produkt v temp array
                        localProdukti.push({
                            ime: element.ime,
                            cena: element.cena,
                            kategorija: element.kategorija
                        }) 
                    }
                    // Shrani temp array v state
                    this.setState({
                        loading: false,
                        produkti: [
                            ...this.state.produkti,
                            ...localProdukti,
                        ],
                    })
                })
                .catch((err) => {
                    this.setState({
                        error: err.message,
                        loading: false,
                    });
                })
        });
    }
    render() {
        const {
            error,
            loading,
            produkti,
        } = this.state;

        return (
            <>
                <h2 className="mt-5">
                    Naši produkti:
                </h2>
                <div className="kategorije">
                    <button type="button" className="btn btn-primary mb-3" onClick={this.naloziKategorijo} >Kategorija</button>
                </div>
                <div className="container">
                    <div className="row" id="product-list">
                        {/* Map za izpis produktov */}
                        {produkti.map(product => (
                            <Fragment key={this.generateKey()} >
                                <hr />
                                <div className="product-list--product col-12 col-md-3">
                                    <img
                                        src={placeholder}
                                        alt="Za ta produkt ni slike"
                                    />
                                    <div>
                                        <h2 style={{ marginTop: 0 }}>
                                            {product.ime}
                                        </h2>
                                        <p>Cena: {product.cena}</p>
                                    </div>
                                </div>
                            </Fragment>
                        ))}
                        <hr />
                        {error &&
                            <div style={{ color: '#900' }}>
                                {error}
                            </div>
                        }
                        {loading &&
                            <div>Loading...</div>
                        }
                    </div>
                </div>

            </>
        )
    }
}

export default Products
