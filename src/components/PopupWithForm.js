import React, {useEffect} from 'react';
import iconClose from '../images/icon_close.svg';

const PopupWithForm = ({isOpen, onClose, children}) => {
  const handleOutsideClick = (e) => {
    if (
      isOpen &&
      !document.getElementById('modal__content_profile').contains(e.target)
    ) {
      onClose();
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]); // eslint-disable-line

  return (
    <div
      className={`modal ${isOpen ? 'modal-show' : ''}`}
      style={{display: isOpen ? 'flex' : 'none'}}
    >
      <form className='modal__content form' id='modal__content_profile'>
        <span className='modal__close' onClick={onClose}>
          <img src={iconClose} alt='close' />
        </span>
        {children}
      </form>
    </div>
  );
};

export default PopupWithForm;
