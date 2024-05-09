'use client'

import React from 'react';
import { Button } from 'antd';

import styles from "./Header.module.scss"
import MenuBar from '../manuBar/Menu';
import { approval, dateTime, notDefine, changeApprovalStatus } from "@/app/utlis/constants"


const TableHead = () => {

  return (
    <div>
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
    </div>
  );
};

export default TableHead;

