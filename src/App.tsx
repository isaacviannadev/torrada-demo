import { useState } from 'react';
import { ToastViewport, useToast } from 'torrada';

import type { ToastViewportProps } from 'torrada';
import 'torrada/style.css';
import { AsyncControls } from './components/AsyncControls';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { PositionControls } from './components/PositionsControls';
import { ToastControls } from './components/ToastControls';
import { Card } from './components/ui/card';

export function App() {
  const [currentPosition, setCurrentPosition] =
    useState<ToastViewportProps['position']>('top-right');
  const { toast, update, dismissAll } = useToast();

  return (
    <div className='min-h-screen bg-background'>
      <Hero />
      <section className='py-16 px-6'>
        <div className='max-w-6xl mx-auto'>
          <div className='text-center mb-12'>
            <h2 className='text-3xl lg:text-4xl font-bold mb-4 text-foreground'>
              Interactive Demo
            </h2>
            <p className='text-lg text-muted-foreground max-w-2xl mx-auto'>
              Try out all the features of Torrada. Click the buttons below to
              see different toast types, positions, and advanced functionality
              in action.
            </p>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
            <ToastControls onToast={toast} onDismissAll={dismissAll} />

            <PositionControls
              currentPosition={currentPosition}
              onPositionChange={setCurrentPosition}
              onToast={toast}
              onDismissAll={dismissAll}
            />

            <div className='lg:col-span-2'>
              <AsyncControls onToast={toast} onUpdate={update} />
            </div>
          </div>

          {/* Instructions */}
          <Card className='mt-12 p-6 shadow-none bg-amber-50/25'>
            <h3 className='text-xl font-semibold mb-4 text-foreground'>
              How to Use
            </h3>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 text-sm'>
              <div>
                <h4 className='font-medium text-foreground mb-2'>
                  Basic Toasts
                </h4>
                <p className='text-muted-foreground'>
                  Click the colored buttons to trigger different types of toast
                  notifications with success, error, warning, and info states.
                </p>
              </div>
              <div>
                <h4 className='font-medium text-foreground mb-2'>
                  Position Control
                </h4>
                <p className='text-muted-foreground'>
                  Change where toasts appear on the screen. Try different
                  positions to see how they behave in various layouts.
                </p>
              </div>
              <div>
                <h4 className='font-medium text-foreground mb-2'>
                  Async Updates
                </h4>
                <p className='text-muted-foreground'>
                  The async demo shows how to update an existing toast, perfect
                  for loading states that resolve to success or error.
                </p>
              </div>
              <div>
                <h4 className='font-medium text-foreground mb-2'>
                  Integration
                </h4>
                <p className='text-muted-foreground'>
                  Replace the mock functions with your actual Torrada library
                  implementation to see real toasts in action.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
      <ToastViewport position={currentPosition} theme='light' />
    </div>
  );
}
export default App;
