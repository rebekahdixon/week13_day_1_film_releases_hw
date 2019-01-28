import React, {Component, Fragment} from 'react';
import Film from './Film.js';

class FilmList extends Component{
    render(){
      const films = this.props.films.map((film, index) => {
        return(
          <Film
          key={index}
          name={film.name}
          url={film.url}
          >
        </Film>
      );
    });

      return(
        <Fragment>
        {films}
        </Fragment>
      );
    }

}

export default FilmList;
