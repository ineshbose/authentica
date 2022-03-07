import React, { useState } from 'react';
import { Button, Card, Input, Modal, Spacer } from '@geist-ui/core';
import { FilePlus, FileText } from '@geist-ui/icons';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import useAppContext from '../lib/AppContext';

const Home: NextPage = () => {
  const [docModalVisible, setDocModalVisible] = useState<boolean>(false);
  const {
    user,
    // helpers: { getDocuments },
  } = useAppContext();
  const router = useRouter();

  if (!user) {
    router.push('/login');
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        padding: '4rem 0',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Spacer h={4}></Spacer>
      <Card type={'lite'}>
        <FileText size={100} />
        <Spacer h={1}></Spacer>
        <Button
          icon={<FilePlus />}
          auto
          type="success"
          onClick={() => setDocModalVisible(true)}
        >
          Sign Document
        </Button>
        <Modal visible={docModalVisible}>
          <Modal.Title>Sign Document</Modal.Title>
          <Modal.Content>
            <Input label="Document Name: " />
          </Modal.Content>
          <Modal.Action passive onClick={() => setDocModalVisible(false)}>
            Cancel
          </Modal.Action>
          <Modal.Action>Submit</Modal.Action>
        </Modal>
      </Card>
    </div>
  );
};

export default Home;
