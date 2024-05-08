'use client'

import React from 'react';
import { Button, Checkbox, Pagination } from 'antd';
import type { CheckboxProps } from 'antd';
import {
  DoubleRightOutlined, DoubleLeftOutlined, LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import styles from "./DataTable.module.scss"
import MenuBar from '../manuBar/Menu';

interface DataTableProps {
}

const DataTable: React.FC<DataTableProps> = () => {


  const approval = [
    {
      key: "11",
      label: "승인여부 전체",
      value: "승인여부 전체",
    },
    {
      key: "12",
      label: "승인대기",
      value: "승인대기",
    }, {
      key: "13",
      label: "승인완료",
      value: "승인완료",
    },
    {
      key: "14",
      label: "승인거부",
      value: "승인거부",
    },
  ]

  const dateTime = [
    {
      key: "11",
      label: "신청일시순",
      value: "신청일시순",
    },
    {
      key: "12",
      label: "승인일시순",
      value: "승인일시순",
    },
  ]

  const notDefine = [
    {
      key: "11",
      label: "50개씩 보기",
      value: "50개씩 보기",
    },
    {
      key: "12",
      label: "100개씩 보기",
      value: "100개씩 보기",
    },
    {
      key: "13",
      label: "200개씩 보기",
      value: "200개씩 보기",
    },
  ]

  const changeApprovalStatus = [
    {
      key: "11",
      label: "승인완료",
      value: "승인완료",
    },
    {
      key: "12",
      label: "승인거부",
      value: "승인거부",
    },
  ]
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
      {/* header  */}
      <div className={styles.header}>
        <h2>회원 목록 <span>(총 100명 | 승인대기 1건)</span></h2>
        <div className={styles.headerOptions}>
          <MenuBar menuItems={approval} width="150px" />
          <MenuBar menuItems={dateTime} width="150px" />
          <MenuBar menuItems={notDefine} width="150px" />
        </div>
      </div>
      <div className={styles.afterHeder}>
        <Button className={styles.btnCheck} onClick={() => { }} >
          등록
        </Button>
        <div >
          <p>선택한 0건</p>
          <MenuBar menuItems={changeApprovalStatus} width="150px" />
          <Button className={styles.btnCheck} onClick={() => { }} >
            등록
          </Button>
        </div>
      </div>

      {/* table */}
      <div className={styles.tableWrapper}>

        <table className={styles.tableMain}>
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

