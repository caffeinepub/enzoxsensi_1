import { useState, FormEvent } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Lock } from 'lucide-react';

interface PasskeyScreenProps {
  onSuccess: () => void;
}

export default function PasskeyScreen({ onSuccess }: PasskeyScreenProps) {
  const [passkey, setPasskey] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (passkey === 'enzonvrfall') {
      setError(false);
      onSuccess();
    } else {
      setError(true);
    }
  };

  return (
    <div className="w-full max-w-md">
      <div className="bg-card border border-border rounded-lg p-8 shadow-2xl">
        <div className="flex flex-col items-center mb-8">
          <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-accent" />
          </div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Enter Passkey</h2>
          <p className="text-muted-foreground text-center">
            Access your sensitivity settings
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="passkey" className="text-foreground">
              Passkey
            </Label>
            <Input
              id="passkey"
              type="password"
              value={passkey}
              onChange={(e) => {
                setPasskey(e.target.value);
                setError(false);
              }}
              placeholder="Enter your passkey"
              className={`bg-white border-border text-black ${
                error ? 'border-destructive focus-visible:ring-destructive' : ''
              }`}
              autoFocus
            />
            {error && (
              <p className="text-sm text-destructive">
                Incorrect passkey. Please try again.
              </p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
            size="lg"
          >
            Unlock
          </Button>

          <div className="pt-4 border-t border-border/50">
            <p className="text-sm text-muted-foreground text-center">
              follow{' '}
              <span className="text-accent font-medium">enzo.nvr.fall</span>{' '}
              for passkey
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
