import React from 'react';
import Header from './components/Header';
import AsidePanel from './components/AsidePanel';
import MainPanel from './components/MainPanel';

const App: React.FC = () => (
    <div className='App' >
        <Header />
        <div className="main">
            <AsidePanel />
            <MainPanel />
        </div>
    </div>
)

export default App;
