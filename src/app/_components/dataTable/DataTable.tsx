'use client'

import React from 'react';
import { Button, Checkbox, Pagination } from 'antd';
import type { CheckboxProps } from 'antd';
import {
  DoubleRightOutlined,
  DoubleLeftOutlined,
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';

import styles from "./DataTable.module.scss"
import MenuBar from '../manuBar/Menu';
import { approval, dateTime, notDefine, changeApprovalStatus } from "@/app/utlis/constants"
import TableHead from '../tableHeader/Header';

interface DataTableProps {
}

const DataTable: React.FC<DataTableProps> = () => {
  const count = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const onChange: CheckboxProps['onChange'] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  const iconStyle = {
    fontSize: '18px',
    color: '#9599A1',
    marginRight: '16px',
  };

  return (
    <div className={styles.table}>


      <TableHead />
      {/* table */}
      <div className={styles.tableWrapper}>

        <table className={styles.tableMain}>
          <thead>
            <tr >
              <th className={styles.h1}><Checkbox className={styles.cb} onChange={onChange} /></th>
              <th className={styles.h2}>No</th>
              <th className={styles.h3}>기존유형</th>
              <th className={styles.h4}>신청유형</th>
              <th className={styles.h5}>제출서류</th>
              <th className={styles.h6}>신청일시</th>
              <th className={styles.h7}>승인여부</th>
              <th className={styles.h8}>승인거부 사유</th>
              <th className={styles.h9}>승인일시</th>
            </tr>
          </thead>
          <tbody>

            {count.map((item, index) => <tr key={index} className={styles.trData}>
              <td><Checkbox className={styles.cb} onChange={onChange} /></td>
              <td>1</td>
              <td>소득적격</td>
              <td>개인전문</td>
              <td><div className={styles.docSubmit}>보기</div></td>
              <td>2023-01-10 09:00:00</td>
              {/* use class "waiting" "denied" "approved" accordingly */}
              <td><div className={`${styles.aproval} ${styles.waiting}`}>승인대기</div></td>
              <td className={styles.longText}>서류 식별 불가 금융투자업자에 계좌를 개설한지 1년 미만으로 전문투자자 승인 불가</td>
              <td>2023-01-10 09:00:00</td>
            </tr>)}
          </tbody>

        </table>
      </div>

      <Pagination prevIcon={
        <>
          <DoubleLeftOutlined style={iconStyle} /> <LeftOutlined style={iconStyle} />
        </>
      }
        nextIcon={
          <>
            <RightOutlined style={iconStyle} /> <DoubleRightOutlined style={iconStyle} />
          </>
        } defaultCurrent={1} total={50} className={styles.pagination} />
    </div>
  );
};

export default DataTable;

