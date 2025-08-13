import heroImage from '@/assets/torrada.jpg';
import { Button } from './ui/button';

export function Hero() {
  return (
    <section className='relative min-h-[70vh] flex items-center justify-center hero-gradient overflow-hidden'>
      <div
        className='absolute inset-0 bg-cover bg-center opacity-20'
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      <div className='relative z-10 text-center max-w-4xl mx-auto px-6'>
        <div className='animate-toast-in'>
          <h1 className='text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-800 via-amber-500 to-amber-200 bg-clip-text text-transparent'>
            Torrada
          </h1>
          <p className='text-xl lg:text-2xl   text-foreground/80 mb-8 leading-relaxed'>
            A deliciously simple toast library that's as smooth as golden butter
            on warm bread 🍞
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <a
              href='https://www.npmjs.com/package/torrada'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button className='text-lg px-8 py-4 cursor-pointer'>
                🚀 Get Started
              </Button>
            </a>
            <a
              href='https://github.com/isaacviannadev/torrada#readme'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Button
                variant='secondary'
                className='text-lg px-8 py-4 cursor-pointer'
              >
                📚 Documentation
              </Button>
            </a>
          </div>
        </div>

        <div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className='text-center p-4'>
            <div className='text-3xl mb-3'>⚡</div>
            <h3 className='font-semibold text-foreground mb-2'>
              Lightning Fast
            </h3>
            <p className='text-sm text-muted-foreground'>
              Optimized for performance with minimal bundle size
            </p>
          </div>
          <div className='text-center p-4'>
            <div className='text-3xl mb-3'>🎨</div>
            <h3 className='font-semibold text-foreground mb-2'>
              Fully Customizable
            </h3>
            <p className='text-sm text-muted-foreground'>
              Style your toasts exactly how you want them
            </p>
          </div>
          <div className='text-center p-4'>
            <div className='text-3xl mb-3'>🔧</div>
            <h3 className='font-semibold text-foreground mb-2'>
              Developer Friendly
            </h3>
            <p className='text-sm text-muted-foreground'>
              Simple API with TypeScript support
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
