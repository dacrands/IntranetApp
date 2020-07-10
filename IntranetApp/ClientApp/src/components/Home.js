import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
            <div class="jumbotron jumbotron-fluid text-center">
                <div class="container">
                    <h1 class="display-4">OneStop</h1>
                    <p class="lead">Steel Dyanmics &mdash; Southwest &mdash; Sinton Division</p>
                </div>
            </div>
            <Container>
                <section class="row mx-md-n3">
                    <div class="col px-md-3">
                        <Link to="/fetch-data" className="icon-btn icon-btn--red">
                            <div> 
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="64" height="64" preserveAspectRatio="xMinYMin" class="jam-icon jam-36"><path fill="#f0ebeb" d="M7 9a1 1 0 0 0-1 1v4a4 4 0 1 0 8 0v-4a1 1 0 0 0-1-1H7zm8.236-1h1.647V5a1 1 0 1 1 2 0v3a2 2 0 0 1-2 2H16v1h3a1 1 0 0 1 0 2h-3v1h.883a2 2 0 0 1 2 2v3a1 1 0 0 1-2 0v-3h-1.224A6.002 6.002 0 0 1 4.34 16H3v3a1 1 0 0 1-2 0v-3a2 2 0 0 1 2-2h1v-1H1a1 1 0 0 1 0-2h3v-1H3a2 2 0 0 1-2-2V5a1 1 0 1 1 2 0v3h1.764A3 3 0 0 1 6 7.17V5a2 2 0 0 1 2-2h.737c-.343-.598-.988-1-1.726-1H5a1 1 0 1 1 0-2h2.01A3.98 3.98 0 0 1 10 1.348 3.98 3.98 0 0 1 12.99 0H15a1 1 0 0 1 0 2h-2.01c-.74 0-1.384.402-1.727 1H12a2 2 0 0 1 2 2v2.17a3 3 0 0 1 1.236.83zM8 7h4V5H8v2z"></path></svg>
                                </div>
                                <h3>Defect Tracking</h3>
                            </div>
                        </Link>
                    </div>
                    <div class="col px-md-3">
                        <Link to="/level-three" className="icon-btn icon-btn--blue px-md-5">
                            <div>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-1 -2 24 24" width="64" height="64" preserveAspectRatio="xMinYMin" class="jam-icon jam-64"><path fill="#f0ebeb" d="M9.815 3.094a3.467 3.467 0 0 1-2.78-1.09l-.084-.001a3.467 3.467 0 0 1-2.781 1.09 3.477 3.477 0 0 1-1.727 2.51 3.471 3.471 0 0 1 0 2.794 3.477 3.477 0 0 1 1.727 2.51 3.467 3.467 0 0 1 2.78 1.09h.084a3.467 3.467 0 0 1 2.78-1.09 3.477 3.477 0 0 1 1.727-2.51 3.471 3.471 0 0 1 0-2.794 3.477 3.477 0 0 1-1.726-2.51zM14 5.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122A1.473 1.473 0 0 0 8.143 14l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131A1.473 1.473 0 0 0 .5 9.968L0 8.278a1.474 1.474 0 0 0 0-2.555l.5-1.69a1.473 1.473 0 0 0 1.545-2.13L3.487.77A1.473 1.473 0 0 0 5.84.005L8.143 0a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14L14 5.714zm-5.812 9.198a7.943 7.943 0 0 0 2.342-.73 3.468 3.468 0 0 1-.087.215 3.477 3.477 0 0 1 1.727 2.51 3.467 3.467 0 0 1 2.78 1.09h.084a3.467 3.467 0 0 1 2.78-1.09 3.477 3.477 0 0 1 1.727-2.51 3.471 3.471 0 0 1 0-2.794 3.477 3.477 0 0 1-1.726-2.51 3.467 3.467 0 0 1-2.78-1.09h-.084l-.015.016a8.077 8.077 0 0 0 .002-2.016L16.144 6a1.473 1.473 0 0 0 2.358.768l1.444 1.122a1.473 1.473 0 0 0 1.553 2.14L22 11.714a1.474 1.474 0 0 0 0 2.572l-.502 1.684a1.473 1.473 0 0 0-1.553 2.14l-1.443 1.122a1.473 1.473 0 0 0-2.359.768l-2.304-.006a1.473 1.473 0 0 0-2.352-.765l-1.442-1.131a1.473 1.473 0 0 0-1.545-2.13l-.312-1.056zM7 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm8 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"></path></svg>
                                </div>
                                <h3>Launch Level 3</h3>
                            </div>
                        </Link>
                    </div>
                </section>
            </Container>
      </div>
    );
  }
}
