'use client';

import React, { useState 									  } from 'react';
import { Button          									  } from 'antd';

import { statuses, dateTime, pagination, changeApprovalStatus } from '@/app/utlis/constants';
import { MenuItem 											  } from '@/app/utlis/interface';
import MenuBar 			   										from '../manuBar/Menu';
import InvestmentType 											from '../Modals/InvestmentType';
import styles     		   										from './Header.module.scss';

interface TableHeadProps {
	selectedCount: number;
	pendingCount: number;
	status: MenuItem;
	statusFilter: MenuItem;
	dateTimeFilter: MenuItem;
	paginationFilter: MenuItem;
	handleChangeStatus: (status: MenuItem) => void;
	handleChangeStatusFilter: (status: MenuItem) => void;
	handleChangeDateTimeFilter: (status: MenuItem) => void;
	handleChangePaginationFilter: (status: MenuItem) => void;
	handleSave: () => void;
}

const TableHead = ({
	selectedCount,
	pendingCount,
	status,
	statusFilter,
	dateTimeFilter,
	paginationFilter,
	handleSave,
	handleChangeStatus,
	handleChangeStatusFilter,
	handleChangeDateTimeFilter,
	handleChangePaginationFilter,
}: TableHeadProps) => {
	const [open, setOpen] = useState<boolean>(false);

	return (
		<>
			<div>
				<div className={styles.header}>
					<h2>
						회원 목록 <span>(총 100명 | 승인대기 {pendingCount}건)</span>
					</h2>
					<div className={styles.headerOptions}>
						<MenuBar
							menuItems={statuses}
							handleMenuItemClick={handleChangeStatusFilter}
							selectedItem={statusFilter}
							width='150px'
						/>
						<MenuBar
							menuItems={dateTime}
							handleMenuItemClick={handleChangeDateTimeFilter}
							selectedItem={dateTimeFilter}
							width='150px'
						/>
						<MenuBar
							menuItems={pagination}
							handleMenuItemClick={handleChangePaginationFilter}
							selectedItem={paginationFilter}
							width='150px'
						/>
					</div>
				</div>
				<div className={styles.afterHeder}>
					<Button
						className={styles.btnCheck}
						onClick={() => setOpen(true)}
					>
						등록
					</Button>
					<div>
						<p>선택한 {selectedCount}건</p>
						<MenuBar
							menuItems={changeApprovalStatus}
							handleMenuItemClick={handleChangeStatus}
							selectedItem={status}
							width='150px'
						/>
						<Button
							className={styles.btnCheck}
							onClick={handleSave}
						>
							등록
						</Button>
					</div>
				</div>
			</div>

			<InvestmentType
				onClick={() => {}}
				open={open}
				onClose={() => setOpen(false)}
			/>
		</>
	);
};

export default TableHead;
