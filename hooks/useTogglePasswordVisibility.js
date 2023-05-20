import { useState } from 'react';

export const useTogglePasswordVisibility = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(true);
  const [visibility, setVisibility] = useState('show');

  const handlePasswordVisibility = () => {
    if (visibility === 'show') {
      setVisibility('hide');
      setPasswordVisibility(!passwordVisibility);
    } else if (visibility === 'hide') {
      setVisibility('show');
      setPasswordVisibility(!passwordVisibility);
    }
  };

  return {
    passwordVisibility,
    visibility,
    handlePasswordVisibility,
  };
};
