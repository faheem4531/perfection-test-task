'use client'

import React from 'react';
import { Button, Modal } from 'antd';

import styles from "./styles.module.scss"
import MenuBar from '../manuBar/Menu';
import { investmentTypes } from "@/app/utlis/constants"

interface InvestmentTypeProps {
  onClick: () => void;
  open: boolean;
  onClose: () => void
}

const InvestmentType: React.FC<InvestmentTypeProps> = ({ onClick, open, onClose }) => {


  return (
    <Modal
      centered
      open={open}
      onOk={onClose}
      onCancel={onClose}
      width={800}
      footer={null}
      className={styles.customModalContent}
    >
      <div className={styles.investmentModal}>
        <p className={styles.title}>투자유형 변경</p>
        <div className={styles.investmentContent}>
          <table className={styles.table}>
            <tr className={styles.tableRow}>
              <th className={styles.heading}>
                회원번호
              </th>
              <td className={styles.tableData}>
                abc111
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <th className={styles.heading}>
                회원명/법인명
              </th>
              <td className={styles.tableData}>
                김길동
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <th className={styles.heading}>
                <p>예치금잔액 <span className={styles.require}></span></p>
              </th>
              <td className={`${styles.tableData} ${styles.pl1}`}>
                <MenuBar menuItems={investmentTypes} width="256px" />
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <th className={`${styles.heading} ${styles.headingb}`}>
                <p>투자건수 <span className={styles.require}></span></p>
              </th>
              <td className={`${styles.tableData} ${styles.pl1}`}>
                <div className={styles.files}>파일 선택</div>
              </td>
            </tr>
          </table>
          <ul>
            <li>파일 형식은 jpg, jpeg, gif, png, pdf만 가능합니다.</li>
            <li>최대 10개, 100MB까지 등록이 가능합니다.</li>
          </ul>
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

export default InvestmentType;

