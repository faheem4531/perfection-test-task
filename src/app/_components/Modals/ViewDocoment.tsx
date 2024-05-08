'use client'

import React from 'react';
import { Button, Modal } from 'antd';
import Image from 'next/image';

import styles from "./styles.module.scss"
import Doc1 from "@/app/_assets/png/doc1.png"
import Doc2 from "@/app/_assets/png/doc2.png"
import Doc3 from "@/app/_assets/png/doc3.png"

interface ViewDocomentProps {
  onClick: () => void;
  open: boolean;
  title: string;
  onClose: () => void
}


const ViewDocoment: React.FC<ViewDocomentProps> = ({ onClick, open, onClose, title }) => {

  const docs = [
    {
      img: Doc1
    },
    {
      img: Doc2

    },
    {
      img: Doc3

    },
  ]

  return (
    <Modal
      centered
      open={open}
      onOk={onClose}
      onCancel={onClose}
      width={800}
      footer={null}
      className={styles.customModalContentDoc}
    >
      <div className={styles.investmentModal}>
        <p className={styles.title}>{title}</p>
        <div className={styles.investmentContent}>

          <div className={styles.docParent}>
            <div className={`${styles.heading} ${styles.aligment}`}><p>서류 <span className={styles.require}></span></p></div>

            <div className={styles.docSlider}>
              {docs.map((item, index) =>
                <Image key={index} src={item.img} alt="img" className={styles.docImg} />
              )}
            </div>
          </div>

        </div>
        <div className={styles.investmentBtns}>
          <Button className={styles.btnCheck1} onClick={onClick} >
            확인
          </Button>
          <Button className={styles.btnCancle1} onClick={onClose} >
            취소
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default ViewDocoment;

