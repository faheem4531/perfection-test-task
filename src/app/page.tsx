'use client'

import React, { useState } from 'react';

import Image from "next/image";
import BasicModal from './_components/Modals/BasicModal';
import { Button, Modal } from 'antd';
import InvestmentType from './_components/Modals/InvestmentType';

export default function Home() {
  const [open, setOpen] = useState(false);


  return (
    <div >
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

      <InvestmentType
        onClick={() => { }}
        open={open}
        onClose={() => setOpen(false)}
      />
    </div>
  );
}
