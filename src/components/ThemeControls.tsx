import { Button } from './ui/button';
import { Card } from './ui/card';

export type ThemeControlsProps = {
  currentTheme: string;
  onSetTheme: (theme: 'light' | 'dark') => void;
};

export function ThemeControls({
  currentTheme,
  onSetTheme,
}: ThemeControlsProps) {
  return (
    <Card className='p-6 shadow bg-gradient-to-r from-slate-200 via-slate-400 to-slate-600 text-black border-2 border-slate-700'>
      <h3 className='text-xl font-bold mb-4'>Theme Controls</h3>
      <div className='flex flex-wrap gap-3'>
        <Button
          className={
            currentTheme === 'light'
              ? 'bg-yellow-300 text-black font-bold border-2 border-yellow-500'
              : 'bg-white text-black'
          }
          onClick={() => onSetTheme('light')}
        >
          ☀️ Tema Claro
        </Button>
        <Button
          className={
            currentTheme === 'dark'
              ? 'bg-gray-900 text-white font-bold border-2 border-gray-700'
              : 'bg-gray-700 text-white'
          }
          onClick={() => onSetTheme('dark')}
        >
          🌙 Tema Escuro
        </Button>
      </div>
    </Card>
  );
}
