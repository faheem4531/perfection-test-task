'use client'

import React, { useState } from 'react';

import Image from "next/image";
import BasicModal from './_components/modals/BasicModal';
import { Button, Modal } from 'antd';
import InvestmentType from './_components/modals/InvestmentType';
import ApprovalRejection from './_components/modals/ApprovalRejection';
import ViewDocoment from './_components/modals/ViewDocoment';
import DataTable from './_components/dataTable/DataTable';

export default function Home() {
  const [open, setOpen] = useState(false);


  return (
    <div >
      <DataTable />


      <Button type="primary" onClick={() => setOpen(true)}>
        Open Modal of 1000px width
      </Button>




      {/* <BasicModal
        cancleBtn={true}
        icon="alert"
        title={"투자유형을 변경하시겠습니까?"}
        onClick={() => { }}
        open={open}
        onClose={() => setOpen(false)}
      /> */}

      {/* <InvestmentType
        onClick={() => { }}
        open={open}
        onClose={() => setOpen(false)}
      /> */}

      <ApprovalRejection
        onClick={() => { }}
        title="승인거부 사유 확인"
        open={open}
        onClose={() => setOpen(false)}
      />

      {/* <ViewDocoment
        onClick={() => { }}
        title="서류 보기"
        open={open}
        onClose={() => setOpen(false)}
      /> */}

    </div>
  );
}
