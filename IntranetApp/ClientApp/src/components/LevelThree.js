import React, { Component } from 'react';
import { Container } from 'reactstrap';

export class LevelThree extends Component {
  static displayName = "broke";

  constructor(props) {
      super(props);
      this.state = { data: [], loading: true };
  }

  componentDidMount() {    
      this.populateLevelThreeData()
  }

  static renderLevelThreeTable(data) {
    return (
        <div>            
            {data.map(val => 
                <p>{val}</p>
            )}
        </div>
    );
  }

    render() {    
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : LevelThree.renderLevelThreeTable(this.state.data);        
        return (
            <div>
                <div class="jumbotron jumbotron-fluid text-center">
                    <div class="container">
                        <h1 class="display-4">Level 3 Applications</h1>                        
                    </div>
                </div>
                <Container>
                    {contents}
                </Container>
            </div>
        );
  }

  async populateLevelThreeData() {
    const response = await fetch('api/levelthree');
    const data = await response.json();
    this.setState({ data, loading: false });
  }
}
