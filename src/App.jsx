import React from 'react';
import { Button } from '@/components/ui/button.jsx';
import './App.css';
import RobotCard from './components/RobotCard.jsx';
import robotData from './robotData.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Robot Showcase</h1>
        <p className="subtitle">Humanoids & Animal-Looking Robots</p>
        <nav>
          <ul>
            <li><a href="#humanoids">Humanoids</a></li>
            <li><a href="#animal-looking">Animal-Looking Robots</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="humanoids">
          <h2>Humanoid Robots</h2>
          <div className="robot-list">
            {robotData.humanoids.map((robot, index) => (
              <RobotCard key={index} robot={robot} />
            ))}
          </div>
        </section>
        <section id="animal-looking">
          <h2>Animal-Looking Robots</h2>
          <div className="robot-list">
            {robotData.animalLooking.map((robot, index) => (
              <RobotCard key={index} robot={robot} />
            ))}
          </div>
        </section>
        <section id="contact">
          <h2>Inquire About Products</h2>
          <p>If you are interested in any of our robots, please contact us via email:</p>
          <Button 
            onClick={() => window.location.href = 'mailto:inquiry@robotshowcase.com'}
            className="buy-now-button"
          >
            Buy Now / Inquire
          </Button>
        </section>
      </main>
      <footer>
        <p>&copy; 2025 Robot Showcase. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
