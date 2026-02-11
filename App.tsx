
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DropZone from './components/DropZone';
import ProcessingOverlay from './components/ProcessingOverlay';
import ResultsView from './components/ResultsView';
import TechnologyView from './components/TechnologyView';
import PrivacyView from './components/PrivacyView';
import EnterpriseView from './components/EnterpriseView';

export enum AppState {
  IDLE = 'IDLE',
  PROCESSING = 'PROCESSING',
  RESULTS = 'RESULTS',
  TECH = 'TECH',
  PRIVACY = 'PRIVACY',
  ENTERPRISE = 'ENTERPRISE'
}

interface FileData {
  name: string;
  size: number;
  type: string;
}

const App: React.FC = () => {
  const [currentState, setCurrentState] = useState<AppState>(AppState.IDLE);
  const [uploadedFile, setUploadedFile] = useState<FileData | null>(null);

  const handleFileDrop = useCallback((file: File) => {
    setUploadedFile({
      name: file.name,
      size: file.size,
      type: file.type
    });
    setCurrentState(AppState.PROCESSING);
    
    // Simulate WASM local processing time
    setTimeout(() => {
      setCurrentState(AppState.RESULTS);
    }, 3500);
  }, []);

  const reset = useCallback(() => {
    setUploadedFile(null);
    setCurrentState(AppState.IDLE);
  }, []);

  const navigateTo = useCallback((state: AppState) => {
    setCurrentState(state);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-indigo-500/30 selection:text-indigo-200">
      {/* Spline Background Container */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-60 transition-opacity duration-1000">
        <iframe 
          src='https://my.spline.design/timefoldodyssey-xT72ddKN685jNuFhJxC3N2Ts/' 
          frameBorder='0' 
          width='100%' 
          height='100%'
          className="scale-110 blur-[1px]"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header 
          onLogoClick={reset} 
          onTechClick={() => navigateTo(AppState.TECH)}
          onPrivacyClick={() => navigateTo(AppState.PRIVACY)}
          onEnterpriseClick={() => navigateTo(AppState.ENTERPRISE)}
          currentState={currentState}
        />
        
        <main className="flex-grow flex flex-col items-center justify-center px-6 py-12">
          {currentState === AppState.IDLE && (
            <div className="w-full max-w-4xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
              <Hero />
              <div className="mt-12">
                <DropZone onFileAccepted={handleFileDrop} />
              </div>
              <footer className="mt-20 text-center opacity-40 text-xs tracking-widest uppercase">
                Zero Cloud Interaction &bull; Local WASM Transformation &bull; Privacy First
              </footer>
            </div>
          )}

          {currentState === AppState.TECH && (
            <TechnologyView onBack={reset} />
          )}

          {currentState === AppState.PRIVACY && (
            <PrivacyView onBack={reset} />
          )}

          {currentState === AppState.ENTERPRISE && (
            <EnterpriseView onBack={reset} />
          )}

          {currentState === AppState.PROCESSING && uploadedFile && (
            <ProcessingOverlay fileName={uploadedFile.name} />
          )}

          {currentState === AppState.RESULTS && uploadedFile && (
            <ResultsView fileName={uploadedFile.name} onReset={reset} />
          )}
        </main>
      </div>
      
      {/* Global Grainy Gradient Overlay */}
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
    </div>
  );
};

export default App;
