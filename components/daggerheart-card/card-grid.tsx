export const CardGrid: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {children}
      </div>
    </div>
  );
};
