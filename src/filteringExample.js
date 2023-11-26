import React, { Component } from "react";
import FilteringMenu from "./filteringMenu";
import './filteringExample.css';

class FilteringExample extends Component {
    render() {
      return (
        <>
            <div className="filteringMenuMainContainer">
                <FilteringMenu />
            </div>
        </>
        );
    }
}

export default FilteringExample;