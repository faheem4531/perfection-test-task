'use client'

import React from 'react';
import { Button, Modal } from 'antd';

import styles from "./styles.module.scss"
import MenuBar from './manuBar/Menu';

interface ApprovalRejectionProps {
  onClick: () => void;
  open: boolean;
  onClose: () => void
}

const ApprovalRejection: React.FC<ApprovalRejectionProps> = ({ onClick, open, onClose }) => {

  const investmentTypes = [
    {
      key: "11",
      label: "일반개인",
      value: "일반개인",
    },
    {
      key: "12",
      label: "소득적격",
      value: "소득적격",
    }, {
      key: "13",
      label: "개인전문",
      value: "개인전문",
    },
    {
      key: "14",
      label: "법인",
      value: "법인",
    },
    {
      key: "15",
      label: "여신금융",
      value: "여신금융",
    },
    {
      key: "16",
      label: "P2P온투",
      value: "P2P온투",
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
                <MenuBar menuItems={investmentTypes} />
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <th className={`${styles.heading} ${styles.headingb}`}>
                <p>투자건수 <span className={styles.require}></span></p>
              </th>
              <td className={`${styles.tableData} ${styles.pl1}`}>
                <div>파일 선택</div>
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

export default ApprovalRejection;

