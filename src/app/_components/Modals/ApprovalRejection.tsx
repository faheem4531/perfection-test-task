'use client'

import React, { useState                 } from 'react';
import { Button, Modal, Checkbox, Input  } from 'antd';
import type { CheckboxProps              } from 'antd';

import styles                            from "./styles.module.scss"

const { TextArea } = Input;

interface ApprovalRejectionProps {
  open              : boolean;
  title             : string;
  reason            : string;
  onClick           : () => void;
  onClose           : () => void
  handleChangeReason: (e: any) => void
}

const ApprovalRejection: React.FC<ApprovalRejectionProps> = ({ onClick, open, onClose, title, reason, handleChangeReason }) => {

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

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
        <p className={styles.title}>{title}</p>
        <div className={styles.investmentContent}>
          <table className={styles.table}>
            <tr className={styles.tableRow}>
              <th className={styles.heading}>
                회원번호
              </th>
              <td className={styles.tableData}>
                abc111, abc222
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <th className={styles.heading}>
                회원명/법인명
              </th>
              <td className={styles.tableData}>
                김길동, ㈜가나다라투자
              </td>
            </tr>
            <tr className={styles.tableRow}>
              <th className={`${styles.heading} ${styles.headingCb}`}>
                <p>승인거부 사유 <span className={styles.require}></span></p>
              </th>
              <td className={`${styles.tableData}`}>
                <div className={styles.cbBox}>
                  <Checkbox className={styles.cb} onChange={onChange}>서류 식별 불가</Checkbox>
                  <Checkbox className={styles.cb} onChange={onChange}>필수 서류 누락</Checkbox>
                  <Checkbox className={styles.cb} onChange={onChange}>서류의 내용이 등록된 회원정보와 다름</Checkbox>
                  <Checkbox className={styles.cb} onChange={onChange}>서류에 누락된 내용이 있음 (필수정보, 회사직인, 본인날인, 본인서명 등)</Checkbox>
                  <Checkbox className={styles.cb} onChange={onChange}>서류의 유효기간이 초과됨</Checkbox>
                  <Checkbox className={styles.cb} onChange={onChange}>직접 입력</Checkbox>
                  <TextArea rows={4} className={styles.textArea}
                  value={reason}
                  onChange={handleChangeReason}
                  autoSize={{ minRows: 4, maxRows: 10 }}
                  style={{
                    resize: 'none', height: "100px", marginTop: "0px",
                    overflowY: "auto", fontSize: "14px", lineHeight: "16.71px",
                    padding: "10px", borderRadius: "8px"
                  }}
                    />
                </div>
              </td>
            </tr>
          </table>
          <div className={styles.inputContainer}>
            <div>
              <div>최근저장일시</div>
              <Input placeholder="Basic usage"
                style={{ width: "214px", fontSize: "14px", borderRadius: "0", height: "40px", border: "none", boxShadow: "none" }}
              />
            </div>
            <div>
              <div>관리자</div>
              <Input placeholder="Basic usage"
                style={{ width: "214px", fontSize: "14px", borderRadius: "0", height: "40px", border: "none", boxShadow: "none" }}
              />
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

export default ApprovalRejection;
