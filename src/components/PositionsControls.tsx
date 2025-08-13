import { useEffect } from 'react';
import { type ToastOptions, type ToastViewportProps } from 'torrada';
import { Button } from './ui/button';
import { Card } from './ui/card';

type Position = ToastViewportProps['position'];

type PositionControlsProps = {
  onToast: (options: ToastOptions) => void;
  onDismissAll: () => void;
  currentPosition: Position;
  onPositionChange: (position: Position) => void;
};

const positions: Position[] = [
  'top-left',
  'top-center',
  'top-right',
  'bottom-left',
  'bottom-center',
  'bottom-right',
];

const positionLabels: Record<NonNullable<Position>, string> = {
  'top-left': '↖️ Top Left',
  'top-center': '⬆️ Top Center',
  'top-right': '↗️ Top Right',
  'bottom-left': '↙️ Bottom Left',
  'bottom-center': '⬇️ Bottom Center',
  'bottom-right': '↘️ Bottom Right',
};

export function PositionControls({
  onToast,
  onDismissAll,
  currentPosition,
  onPositionChange,
}: PositionControlsProps) {
  useEffect(() => {
    onDismissAll();
  }, [currentPosition, onDismissAll]);

  const handlePositionChange = (position: Position) => {
    onPositionChange(position);
    onToast({ title: `Position changed to ${position}` });
  };

  return (
    <Card className='p-6 shadow-none bg-amber-50/25'>
      <h3 className='text-xl font-semibold mb-4 text-foreground'>
        Toast Position: <span className='text-primary'>{currentPosition}</span>
      </h3>
      <div className='grid grid-cols-2 lg:grid-cols-3 gap-3'>
        {positions.map((position) => (
          <Button
            key={position}
            variant={currentPosition === position ? 'default' : 'secondary'}
            onClick={() => handlePositionChange(position)}
          >
            {positionLabels[position || 'top-right']}
          </Button>
        ))}
      </div>
    </Card>
  );
}
