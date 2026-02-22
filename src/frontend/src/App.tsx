import { useState } from 'react';
import PasskeyScreen from './components/PasskeyScreen';
import DeviceNameScreen from './components/DeviceNameScreen';
import SensitivityPopup from './components/SensitivityPopup';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showSensitivityPopup, setShowSensitivityPopup] = useState(false);
  const [deviceName, setDeviceName] = useState('');

  const handlePasskeySuccess = () => {
    setIsAuthenticated(true);
  };

  const handleGenerate = (name: string) => {
    setDeviceName(name);
    setShowSensitivityPopup(true);
  };

  const handleClosePopup = () => {
    setShowSensitivityPopup(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="border-b border-border/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center gap-3">
          <img 
            src="/assets/generated/skull-logo.dim_256x256.png" 
            alt="ENZOxSENSI Logo" 
            className="w-10 h-10 sm:w-12 sm:h-12"
          />
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
            ENZO<span className="text-accent">x</span>SENSI
          </h1>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        {!isAuthenticated ? (
          <PasskeyScreen onSuccess={handlePasskeySuccess} />
        ) : (
          <DeviceNameScreen onGenerate={handleGenerate} />
        )}
      </main>

      <footer className="border-t border-border/50 py-6 mt-auto">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} ENZOxSENSI. Built with ❤️ using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'enzoxsensi'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground hover:text-accent transition-colors underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>

      <SensitivityPopup
        isOpen={showSensitivityPopup}
        onClose={handleClosePopup}
        deviceName={deviceName}
      />
    </div>
  );
}

export default App;
