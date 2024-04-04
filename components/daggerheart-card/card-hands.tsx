type CardHandsProps = {
  hands?: number;
};

export const CardHands: React.FC<CardHandsProps> = ({ hands = 0 }) => {
  return (
    <div className='absolute right-6 top-6'>
      {hands === 2 ? (
        <img className='h-8' src='/assets/card/dh-two-hands.png' />
      ) : (
        <img className='h-8' src='/assets/card/dh-one-hand.png' />
      )}
    </div>
  );
};
