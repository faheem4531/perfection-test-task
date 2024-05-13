'use client'

import React             from 'react';
import { Button, Modal } from 'antd';
import Image             from 'next/image';

import styles            from "./styles.module.scss"
import Warning           from '@/app/_assets/svgs/modal-warning-icon.svg';
import Check             from '@/app/_assets/svgs/modal-check-icon.svg';

interface BasicModalProps {
  icon     : string;
  title    : string;
  open     : boolean;
  cancleBtn: boolean
  onClose  : () => void
  onClick  : () => void;
}

const BasicModal: React.FC<BasicModalProps> = ({ icon, title, onClick, open, onClose, cancleBtn }) => {

  return (
    <Modal
      centered
      open={open}
      onOk={onClose}
      onCancel={onClose}
      width={400}
      footer={null}
    >
      <div className={styles.basicModal}>
        <Image src={icon === 'alert' ? Warning : Check} alt="modal icon" />
        <p className={styles.modalText}>{title}</p>
        <div className={styles.btnContainer}>
          <Button className={styles.btnCheck} onClick={cancleBtn ? onClick : onClose} >
            확인
          </Button>
          {cancleBtn && <Button className={styles.btnCancle} onClick={onClose} >
            취소
          </Button>}
        </div>
      </div>
    </Modal>
  );
};

export default BasicModal;
