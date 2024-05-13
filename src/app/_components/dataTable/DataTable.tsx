'use client';

import React, { useEffect, useState 			   } from 'react';
import { Checkbox, Pagination 						 	 } from 'antd';
import {
	DoubleRightOutlined, DoubleLeftOutlined,
	LeftOutlined, RightOutlined							 	 } from '@ant-design/icons';
	import { 
	changeApprovalStatus, dateTime,
	iconStyle, pagination, statuses, tableData } from '@/app/utlis/constants';
		
import { getStatusClassName 								 } from '@/app/utlis/utils';
import { DataTableProps, Member, MenuItem 	 } from '@/app/utlis/interface';
import styles 															   from './DataTable.module.scss';
import TableHead 														   from '../tableHeader/Header';
import ViewDocoment 												   from '../Modals/ViewDocoment';
import BasicModal 													   from '../Modals/BasicModal';
import ApprovalRejection 										   from '../Modals/ApprovalRejection';

const DataTable: React.FC<DataTableProps> = () => {
	const [data, setData] 																		= useState<Member[]>(tableData);
	const [filteredData, setFilteredData] 										= useState<Member[]>(tableData);
	const [openViewFiles, setOpenViewFiles] 									= useState<boolean>(false);
	const [open, setOpen] 																		= useState<boolean>(false);
	const [approvalRejectionModel, setApprovalRejectionModel] = useState<boolean>(false);
	const [icon, setIcon] 																		= useState<string>('alert');
	const [hasCancleBtn, setHasCancleBtn] 										= useState<boolean>(false);
	const [modalTitle, setModalTitle] 												= useState<string>('');
	const [selectedItems, setSelectedItems] 									= useState<Member[]>([]);
	const [status, setStatus] 															  = useState<MenuItem>(changeApprovalStatus[0]);
	const [statusFilter, setStatusFilter] 										= useState<MenuItem>(statuses[0]);
	const [dateTimeFilter, setDateTimeFilter] 								= useState<MenuItem>(dateTime[0]);
	const [paginationFilter, setPaginationFilter] 						= useState<MenuItem>(
		pagination[0]
	);
	const pendingItemsCount = filteredData.filter((row) => row.status === '승인대기').length;

	useEffect(() => {
		if (statusFilter.key === '11') setFilteredData(data);
		else
			setFilteredData(
				data.filter((member) => member.status === statusFilter.value)
			);
	}, [statusFilter, data]);

	const selectAllItems = () => {
		selectedItems.length === pendingItemsCount
			? setSelectedItems([])
			: setSelectedItems(
					filteredData.filter((row) => row.status === '승인대기')
			  );
	};

	const onChange = (selectedItem: Member) => {
		selectedItems.includes(selectedItem)
			? setSelectedItems(
					selectedItems.filter(
						(item) => item.serial_no !== selectedItem.serial_no
					)
			  )
			: setSelectedItems((prev) => [...prev, selectedItem]);
	};

	const handleSave = () => {
		if (!selectedItems.length) {
			setModalTitle('선택된 신청건이 없습니다.');
		} else if (status.value === '승인상태 변경') {
			setModalTitle('승인 또는 거부 상태를 선택하세요.');
		} else if (!!selectedItems.length) {
			setModalTitle(
				`선택된 ${selectedItems.length}건의 승인상태를 변경하시겠습니까?`
			);
			setHasCancleBtn(true);
		}
		setOpen(true);
	};

	const handleChangeStatus = (selectedStatus: MenuItem) => {
		setStatus(selectedStatus);
	};
	const handleChangeStatusFilter = (selectedStatus: MenuItem) => {
		setStatusFilter(selectedStatus);
	};
	const handleChangeDateTimeFilter = (selectedStatus: MenuItem) => {
		setDateTimeFilter(selectedStatus);
	};
	const handleChangePaginationFilter = (selectedStatus: MenuItem) => {
		setPaginationFilter(selectedStatus);
	};

	const handleSaveModel = () => {
		if (status.value === '승인거부') {
			setApprovalRejectionModel(true);
			return;
		}
		selectedItems.forEach((selectedItem) => {
			const index = filteredData.findIndex(
				(item) => item.serial_no === selectedItem.serial_no
			);
			const dataIndex = data.findIndex(
				(item) => item.serial_no === selectedItem.serial_no
			);
			if (index !== -1) {
				filteredData[index].status = status.value;
			}
			if (dataIndex !== -1) {
				data[dataIndex].status = status.value;
			}
		});
		setData(data);
		setFilteredData(filteredData);
		setSelectedItems([]);
		setIcon('success');
		setHasCancleBtn(false);
		setModalTitle('저장되었습니다.');
	};

	const openViewImagesModal = () => {
		setOpenViewFiles(true);
	};

	return (
		<div className={styles.table}>
			<TableHead
				selectedCount={selectedItems.length}
				pendingCount={pendingItemsCount}
				status={status}
				statusFilter={statusFilter}
				dateTimeFilter={dateTimeFilter}
				paginationFilter={paginationFilter}
				handleSave={handleSave}
				handleChangeStatusFilter={handleChangeStatusFilter}
				handleChangeDateTimeFilter={handleChangeDateTimeFilter}
				handleChangePaginationFilter={handleChangePaginationFilter}
				handleChangeStatus={handleChangeStatus}
			/>
			<div className={styles.tableWrapper}>
				<table className={styles.tableMain}>
					<thead>
						<tr>
							<th className={styles.h1}>
								<Checkbox
									checked={selectedItems.length === pendingItemsCount}
									className={styles.cb}
									onChange={selectAllItems}
								/>
							</th>
							<th className={styles.h2}>NO</th>
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
						{!filteredData.length ? <div className={styles.noData}>
							조회 결과가 없습니다.
						</div> : filteredData.map((item, index) => (
							<tr
								key={index}
								className={styles.trData}
							>
								<td>
									<Checkbox
										checked={selectedItems.includes(item)}
										disabled={item.status !== '승인대기'}
										className={styles.cb}
										onChange={() => onChange(item)}
									/>
								</td>
								<td>{item.serial_no}</td>
								<td>소득적격</td>
								<td>개인전문</td>
								<td>
									<div
										className={styles.docSubmit}
										onClick={openViewImagesModal}
									>
										보기
									</div>
								</td>
								<td>2023-01-10 09:00:00</td>
								<td>
									<div
										className={`${styles.aproval} ${getStatusClassName(
											item.status
										)}`}
									>
										{item.status}
									</div>
								</td>
								<td className={styles.longText}>{item.reason}</td>
								<td>{item.approval_date}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>

			{!!filteredData.length && <Pagination
				prevIcon={
					<>
						<DoubleLeftOutlined style={iconStyle} />{' '}
						<LeftOutlined style={iconStyle} />
					</>
				}
				nextIcon={
					<>
						<RightOutlined style={iconStyle} />{' '}
						<DoubleRightOutlined style={iconStyle} />
					</>
				}
				defaultCurrent={1}
				total={50}
				className={styles.pagination}
			/>}
			<ViewDocoment
				onClick={() => {}}
				title='서류 보기'
				open={openViewFiles}
				onClose={() => setOpenViewFiles(false)}
			/>
			<BasicModal
				cancleBtn={hasCancleBtn}
				icon={icon}
				title={modalTitle}
				onClick={handleSaveModel}
				open={open}
				onClose={() => setOpen(false)}
			/>
			<ApprovalRejection
				onClick={() => {}}
				title='승인거부 사유 확인'
				open={approvalRejectionModel}
				onClose={() => setApprovalRejectionModel(false)}
			/>
		</div>
	);
};

export default DataTable;
