import React from 'react';
import './App.css';
import { Grid } from 'semantic-ui-react';
import Restaurant from '../../features/maps/restaurant';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Restaurant Reviewer
      </header>
      {/* AIzaSyCWlhjBQDtztfsfYBMFBhhe7fq4ss81HFw */}
      <Grid>
        <Grid.Column width={12}>
          <Restaurant />
        </Grid.Column>
        <Grid.Column width={4}>
          Restaurants Area
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default App;
