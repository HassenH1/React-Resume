import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Img from '../freshboy.jpg';

class Landingpage extends Component {
  render() {
    return(
      <div style= {{width: '100%', margin: 'auto'}}>
        <Grid className="Landing-grid">
          <Cell col={12}>
            <img
              src={Img}
              alt={"Img"}
              className="profile-img"
            />
            <div className="banner-text">
              <h1>Front-end Developer</h1>

              <hr />
              <p>| HTML/CSS | Bootstrap | JavaScript | Reactjs | Sass | Nodejs | Gulp.js |</p>
              <div className="social-links">
                {/*linked tags bro*/}
                <a href="google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-github-square" aria-hidden="true"></i>
                </a>

                <a href="google.com" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                </a>

              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landingpage
