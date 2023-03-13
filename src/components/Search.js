import React from "react";

export default class Search extends React.Component {
  state = {
    search: "John Wick",
    type: "all",
  };

  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  handelFilter = (e) => {
    this.setState(() => ({type: e.target.dataset.type}), () => {
      this.props.searchMovies(this.state.search, this.state.type)
    });
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            type="search"
            placeholder="Search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <button
            className="btn search-btn"
            onClick={() => this.props.searchMovies(this.state.search, this.state.type)}
          >
            Search Movies
          </button>
        </div>
        <div>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="all"
              onChange={this.handelFilter} 
              checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="movie"
              onChange={this.handelFilter}
              checked={this.state.type === "movie"}
            />
            <span>Movies only</span>
          </label>
          <label>
            <input
              class="with-gap"
              name="type"
              type="radio"
              data-type="series"
              onChange={this.handelFilter}
              checked={this.state.type === 'series'}
            />
            <span>Series only</span>
          </label>
        </div>
      </div>
    );
  }
}
