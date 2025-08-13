export function Footer() {
  return (
    <footer className='py-6'>
      <div className='max-w-6xl mx-auto text-center'>
        <p className='mb-2 text-sm text-muted-foreground'>
          Created with ❤️ by Torrada Team
        </p>
        <p className='text-sm text-muted-foreground'>
          &copy; {new Date().getFullYear()} Torrada. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
