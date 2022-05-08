import React from 'react';
import Header from './components/Header';
import './App.css';
import Card from './components/Card';
import iconSupervisor from '../src/images/icon-supervisor.svg';
import iconTeamBuilder from '../src/images/icon-team-builder.svg';
import iconKarma from '../src/images/icon-karma.svg';
import iconCalculator from '../src/images/icon-calculator.svg';
import Footer from './components/Footer';

const App = () => {
  return (
    <main className="wrapper">
      <Header />
      <div className="card-container">
        <Card
          title={'Supervisor'}
          text={'Monitors activity to identify project roadblocks'}
          icon={iconSupervisor}
          className={'card-center'}
          borderTopColor={'hsl(180, 62%, 55%)'}
        />
        <div className="card-container-col">
          <Card
            title={'Team Builder'}
            text={
              'Scans our talent network to create the optimal team for your project'
            }
            icon={iconTeamBuilder}
            className={'card-col'}
            borderTopColor={'hsl(0, 78%, 62%)'}
          />
          <Card
            title={'Karma'}
            text={'Regularly evaluates our talent to ensure quality'}
            icon={iconKarma}
            className={'card-col'}
            borderTopColor={'hsl(34, 97%, 64%)'}
          />
        </div>
        <Card
          title={'Calculator'}
          text={
            'Uses data from past projects to provide better delivery estimates'
          }
          icon={iconCalculator}
          className={'card-center'}
          borderTopColor={'hsl(212, 86%, 64%)'}
        />
      </div>
      <Footer />
    </main>
  );
};

export default App;
