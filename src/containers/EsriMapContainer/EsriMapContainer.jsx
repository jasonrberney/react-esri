import React, { Component } from "react";
import { loadModules } from "esri-loader";

class EsriMapContainer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            map: null
        }
    }

    componentDidMount() {
    // first, we use Dojo's loader to require the map class
        loadModules(["esri/views/MapView", "esri/Map"])
            .then(([MapView, Map]) => {
                // then we load a web map from an id
                const esriMap = new Map("mymap", {
                    basemap: "hybrid"
                });
                // and we show that map in a container w/ id #viewDiv
                let view = new MapView({
                    esriMap,
                    container: "mymap"
                });
                this.setState({map: esriMap})
                //this.state.map = esriMap;
                console.log(this.state)
            }).catch((err) => {
                // handle any errors
                console.error(err);
            });
    }

    render() {
        const style = {
            position: 'absolute',
            top: '15%',
            bottom: '1.5%',
            width: '99%',
        };

        return (
            <div id="mymap" ref={c => {this.state.map = c;}} style={style} >
            </div>
        );
    }
}

export default EsriMapContainer;
