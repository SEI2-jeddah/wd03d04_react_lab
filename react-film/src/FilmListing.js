import React from "react";
import FilmDetails from "./FilmDetails";
import FilmRow from './FilmRow';
class FilmListing extends React.Component {
  render() {
    const { films } = this.props;
    return (
      <div>
        {
          films.map((film) => (
            <FilmRow film={film} key={film.id} />
          ))
        }
      </div>
    );
  }
}
export default FilmListing;
