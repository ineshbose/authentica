import { useState } from 'react';
import { Button, Card, Input, Modal, Spacer } from '@geist-ui/core';
import { FilePlus, FileText } from '@geist-ui/icons';
import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [docModalVisible, setDocModalVisible] = useState<boolean>(false);
  console.log(selectedOption);

  const signDocument = (
    <>
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
    </>
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Authentica</h3>
        <Spacer h={4}></Spacer>
        <Card type={'lite'}>
          <FileText size={100} />
          <Spacer h={1}></Spacer>
          {signDocument}
        </Card>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
