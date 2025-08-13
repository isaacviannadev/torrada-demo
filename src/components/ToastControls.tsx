import type { ToastOptions } from 'torrada';
import { Button } from './ui/button';
import { Card } from './ui/card';

type ToastControlsProps = {
  onToast: (options: ToastOptions) => void;
  onDismissAll: () => void;
};

export function ToastControls({ onToast, onDismissAll }: ToastControlsProps) {
  return (
    <Card className='p-6 shadow-none bg-amber-50/25'>
      <h3 className='text-xl font-semibold mb-4 text-foreground'>
        Basic Toast Controls
      </h3>
      <div className='flex flex-wrap gap-3'>
        <Button
          className=' bg-green-500 hover:bg-green-600 text-white active:bg-green-700'
          onClick={() => onToast({ kind: 'success', title: 'Saved!' })}
        >
          ✅ Success
        </Button>

        <Button
          className='bg-red-400 hover:bg-red-500 text-white active:bg-red-600'
          onClick={() => onToast({ kind: 'error', title: 'Oops!' })}
        >
          ❌ Error
        </Button>

        <Button
          className='bg-orange-500 hover:bg-orange-600 text-white active:bg-orange-700'
          onClick={() => onToast({ kind: 'warning', title: 'Attention!' })}
        >
          ⚠️ Warning
        </Button>

        <Button
          className='bg-sky-500 hover:bg-sky-600 text-white active:bg-sky-700'
          onClick={() => onToast({ kind: 'info', title: 'Information' })}
        >
          ℹ️ Info
        </Button>

        <Button
          variant={'secondary'}
          onClick={() => {
            onToast({ title: '1' });
            onToast({ title: '2' });
            onToast({ title: '3' });
          }}
        >
          🚀 Spawn x3
        </Button>

        <Button variant={'secondary'} onClick={onDismissAll}>
          🗑️ Close All
        </Button>
      </div>
    </Card>
  );
}
