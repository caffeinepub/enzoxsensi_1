import { useState, FormEvent, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Smartphone, Target, Loader2 } from 'lucide-react';

interface DeviceNameScreenProps {
  onGenerate: (deviceName: string) => void;
}

export default function DeviceNameScreen({ onGenerate }: DeviceNameScreenProps) {
  const [deviceName, setDeviceName] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  useEffect(() => {
    if (isGenerating) {
      // First message: "optimising your device"
      setLoadingMessage('optimising your device');
      
      // After 2.5 seconds, switch to second message
      const messageTimer = setTimeout(() => {
        setLoadingMessage('generating sensitivity for your device');
      }, 2500);

      // After 5 seconds total, complete the generation
      const completeTimer = setTimeout(() => {
        setIsGenerating(false);
        onGenerate(deviceName.trim());
      }, 5000);

      return () => {
        clearTimeout(messageTimer);
        clearTimeout(completeTimer);
      };
    }
  }, [isGenerating, deviceName, onGenerate]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (deviceName.trim()) {
      setIsGenerating(true);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-card border border-border rounded-lg p-8 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <Smartphone className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Device Setup</h2>
          <p className="text-muted-foreground text-center">
            Enter your device name to generate Brazilian sensitivity settings
          </p>
          
          <div className="mt-4 flex items-center gap-2 px-4 py-2 rounded-md bg-accent/10 border border-accent/30">
            <Target className="w-5 h-5 text-accent" />
            <span className="text-accent font-bold text-sm">
              100% headshot rate
            </span>
          </div>
        </div>

        {isGenerating ? (
          <div className="space-y-6">
            <div className="flex flex-col items-center justify-center py-8">
              <Loader2 className="w-12 h-12 text-accent animate-spin mb-4" />
              <p className="text-foreground text-lg font-medium text-center">
                {loadingMessage}
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="deviceName" className="text-foreground">
                Device Name
              </Label>
              <Input
                id="deviceName"
                type="text"
                value={deviceName}
                onChange={(e) => setDeviceName(e.target.value)}
                placeholder="e.g., iPhone 15 Pro, Galaxy S24"
                className="bg-white border-border text-black"
                autoFocus
              />
              <p className="text-xs text-muted-foreground">
                This helps us optimize your Brazilian sensitivity settings
              </p>
            </div>

            <Button
              type="submit"
              disabled={!deviceName.trim()}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
              size="lg"
            >
              Generate
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
