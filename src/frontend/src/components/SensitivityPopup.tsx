import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import { useMemo } from 'react';

interface SensitivityPopupProps {
  isOpen: boolean;
  onClose: () => void;
  deviceName: string;
}

export default function SensitivityPopup({
  isOpen,
  onClose,
  deviceName,
}: SensitivityPopupProps) {
  // Generate random sensitivity values within specified ranges
  const sensitivitySettings = useMemo(() => {
    const generateRandom = (min: number, max: number) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    return [
      { label: 'General', value: generateRandom(50, 200) },
      { label: 'Red Dot', value: generateRandom(50, 150) },
      { label: '2x', value: generateRandom(100, 250) },
      { label: '4x', value: generateRandom(100, 250) },
    ];
  }, [isOpen]); // Regenerate when popup opens

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-border">
        <DialogHeader>
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6 text-accent" />
            </div>
          </div>
          <DialogTitle className="text-center text-2xl">
            Sensitivity Settings Generated
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            {deviceName && `For your device: ${deviceName}`}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-4">
          <p className="text-sm text-foreground/90 text-center mb-4">
            The sensi for your device is:
          </p>
          
          <div className="space-y-3">
            {sensitivitySettings.map((setting) => (
              <div
                key={setting.label}
                className="flex items-center justify-between p-3 rounded-md bg-accent/5 border border-border/50"
              >
                <span className="font-medium text-foreground">
                  {setting.label}
                </span>
                <span className="text-xl font-bold text-accent">
                  {setting.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center pt-4">
          <Button
            onClick={onClose}
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
          >
            Got it!
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
