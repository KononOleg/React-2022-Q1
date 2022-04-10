import React from 'react';
import './modal.css';

interface IProps {
  closeModal: () => void;
  id: string;
}

export class Modal extends React.Component<IProps, unknown> {
  render() {
    return <div className="modal"></div>;
  }
}
