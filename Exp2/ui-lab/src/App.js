import React from 'react';
// Import Bootstrap first [cite: 21, 47, 106]
import 'bootstrap/dist/css/bootstrap.min.css';
// Import Material UI components - Renaming Card to avoid conflict 
import { Button, TextField, Card as MuiCard, CardContent } from '@mui/material';

function App() {
  return (
    <div>
      {/* Experiment-4: Responsive Navbar [cite: 109, 110] */}
      <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand mb-0 h1 px-3">Lab Unit-2 Integrated UI</span>
      </nav>

      <div className="container mt-4">
        {/* Experiment-1: Bootstrap UI Demo [cite: 26, 27, 28, 29, 30] */}
        <h2 className="text-center">Bootstrap & MUI Components</h2>
        <div className="card p-3 mt-3">
          <h5>Bootstrap Form</h5>
          <input className="form-control" placeholder="Enter name" />
          <button className="btn btn-primary mt-3">Submit Bootstrap</button>
        </div>

        {/* Experiment-2: Card-Based Layout (Grid System) [cite: 51, 52, 53, 55, 56] */}
        <div className="row mt-4">
          <div className="col-md-6">
            <div className="card p-3">Bootstrap Grid Card 1</div>
          </div>
          <div className="col-md-6">
            <div className="card p-3">Bootstrap Grid Card 2</div>
          </div>
        </div>

        <hr className="my-5" />

        {/* Experiment-3: Material UI Form [cite: 83, 84, 85, 86] */}
        {/* FIXED: Added quotes to '20px auto' to prevent the null useContext error */}
        <MuiCard style={{ width: 300, margin: '20px auto' }}>
          <CardContent>
            <h3>Material UI Form</h3>
            <TextField label="Name" fullWidth margin="normal" />
            <Button variant="contained" fullWidth color="primary">
              Submit Material UI
            </Button>
          </CardContent>
        </MuiCard>
      </div>
    </div>
  );
}

export default App;