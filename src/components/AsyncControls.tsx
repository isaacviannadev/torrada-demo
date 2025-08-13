import { type ToastOptions } from 'torrada';
import { Button } from './ui/button';
import { Card } from './ui/card';

type AsyncControlsProps = {
  onToast: (options: ToastOptions) => string;
  onUpdate: (id: string, patch: Partial<Omit<ToastOptions, 'id'>>) => void;
};

export function AsyncControls({ onToast, onUpdate }: AsyncControlsProps) {
  const handleAsyncToast = async () => {
    const id = onToast({
      kind: 'info',
      title: 'Starting operation...',
      description: 'Wait, processing...',
    });

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));

      onUpdate(id, {
        kind: 'success',
        title: 'Operation concluded!',
        description: 'Asynchronous processing completed successfully! 🎉',
      });
    } catch (error) {
      console.error('Error during async operation:', error);
      onUpdate(id, {
        kind: 'error',
        title: 'Operation error',
        description: 'Failure during processing',
      });
    }
  };

  return (
    <Card className='p-6 shadow-none bg-amber-50/25'>
      <h3 className='text-xl font-semibold mb-4 text-foreground'>
        Advanced Controls
      </h3>
      <div className='space-y-3'>
        <Button className='btn-toast w-full' onClick={handleAsyncToast}>
          ⚡ Async Toast Demo
        </Button>
        <p className='text-sm text-muted-foreground'>
          This will show an info toast that updates to success after 2 seconds
        </p>
      </div>
    </Card>
  );
}
