import React from 'react';
import { useNavPage } from '../hooks';

interface ReturnButton {
  children: React.ReactNode
}

export const ReturnButton: React.FC<ReturnButton> = ({children}) => {

  const { returnPage } = useNavPage()

  return (
    <div className="btnBox">
      <button onClick={returnPage} className="btn animation btn--return">
        {children}
      </button>
    </div>
  );
};
