'use client';

import React  from 'react';
import styles from './Tab.module.scss';

const Tab = () => {
	return (
		<div className={styles.tab}>
			<div className={styles.h2}>
				<h2>회원상세</h2>
				<span></span>
				<p>필수항목</p>
			</div>
			<div className={styles.hr}></div>
			<div className={styles.tabsDiv}>
				<div className={styles.tabContainer}>
					<h3>기본정보 관리</h3>
					<h3 className={styles.active}>투자유형 관리</h3>
					<h3>입출금내역 조회</h3>
					<h3>영업내역 조회</h3>
					<h3>투자내역 조회</h3>
					<h3>채권내역 조회</h3>
					<h3>SMS 관리</h3>
					<h3>상담내역 관리</h3>
					<h3>1:1문의내역 조회</h3>
				</div>
			</div>
		</div>
	);
};

export default Tab;
