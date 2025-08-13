import type { ToastOptions } from 'torrada';
import { Button } from './ui/button';
import { Card } from './ui/card';

type CustomToastControlsProps = {
  customToast: (options: Omit<ToastOptions, 'kind'>) => void;
  onToast: (options: ToastOptions) => void;
  onDismissAll: () => void;
};

export function CustomToastControls({
  customToast,
  onToast,
  onDismissAll,
}: CustomToastControlsProps) {
  const handleCustomContentToast = () => {
    customToast({
      title: 'Custom Content',
      customContent: (
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '20px',
            }}
          >
            🎨
          </div>
          <div>
            <div style={{ fontWeight: 'bold', marginBottom: '4px' }}>
              Design System
            </div>
            <div style={{ fontSize: '14px', opacity: 0.8 }}>
              Custom styled notification
            </div>
          </div>
        </div>
      ),
      duration: 8000,
    });
  };

  const handleCustomIconToast = () => {
    customToast({
      title: 'Custom Icon Toast',
      description: 'This toast has a custom icon and actions',
      customIcon: (
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: '#8b5cf6',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '14px',
          }}
        >
          ⭐
        </div>
      ),
      customActions: (
        <>
          <button onClick={() => onToast({ kind: 'success', title: 'Liked!' })}>
            👍 Like
          </button>
          <button onClick={() => onToast({ kind: 'info', title: 'Shared!' })}>
            📤 Share
          </button>
        </>
      ),
      duration: 10000,
    });
  };

  const handleCustomStyleToast = () => {
    customToast({
      title: 'Custom Styled',
      description: 'Toast with custom styling and layout',
      customClassName: 'custom-gradient-toast',
      customStyle: {
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        border: 'none',
        boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
      },
      duration: 6000,
    });
  };

  const handleInteractiveToast = () => {
    customToast({
      title: 'Interactive Toast',
      description: 'Click the buttons below to interact',
      customActions: (
        <>
          <button
            onClick={() =>
              onToast({ kind: 'success', title: 'Action 1 executed!' })
            }
            style={{
              background: '#10b981',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '6px',
            }}
          >
            Action 1
          </button>
          <button
            onClick={() =>
              onToast({ kind: 'warning', title: 'Action 2 executed!' })
            }
            style={{
              background: '#f59e0b',
              color: 'white',
              border: 'none',
              padding: '6px 12px',
              borderRadius: '6px',
            }}
          >
            Action 2
          </button>
        </>
      ),
      duration: 12000,
    });
  };

  return (
    <Card className='p-6 shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white border-2 border-purple-700'>
      <h3 className='text-xl font-bold mb-4 drop-shadow-lg'>
        Custom Toast Controls
      </h3>
      <div className='flex flex-wrap gap-3'>
        <Button
          className='bg-white text-purple-700 font-bold border-2 border-purple-700 hover:bg-purple-100 shadow-md'
          onClick={handleCustomContentToast}
        >
          🎨 Custom Content
        </Button>
        <Button
          className='bg-black text-pink-400 font-bold border-2 border-pink-400 hover:bg-pink-900 shadow-md'
          onClick={handleCustomIconToast}
        >
          ⭐ Custom Icon + Actions
        </Button>
        <Button
          className='bg-gradient-to-r from-indigo-400 to-purple-600 text-white font-bold border-2 border-indigo-700 hover:from-indigo-500 hover:to-purple-700 shadow-md'
          onClick={handleCustomStyleToast}
        >
          🎨 Custom Styling
        </Button>
        <Button
          className='bg-pink-500 text-white font-bold border-2 border-white hover:bg-pink-600 shadow-md'
          onClick={handleInteractiveToast}
        >
          🕹️ Interactive
        </Button>
        <Button variant={'secondary'} onClick={onDismissAll}>
          🗑️ Fechar Todos
        </Button>
      </div>
    </Card>
  );
}
