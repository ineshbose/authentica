import React from 'react';
import {
  Button,
  Card,
  Input,
  Modal,
  Select,
  Spacer,
  Grid,
} from '@geist-ui/core';
import { FilePlus, FileText, Key, Plus } from '@geist-ui/icons';
import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [selectedOption, setSelectedOption] = React.useState<
    string | string[]
  >();
  const [keyModalVisible, setKeyModalVisible] = React.useState<boolean>(false);
  const [docModalVisible, setDocModalVisible] = React.useState<boolean>(false);

  console.log(selectedOption);

  const optionsSelector = (
    <Select placeholder="Choose one" onChange={setSelectedOption}>
      <Select.Option value="1">Option 1</Select.Option>
      <Select.Option value="2">Option 2</Select.Option>
    </Select>
  );

  const addKey = (
    <>
      <Button
        icon={<Plus />}
        auto
        type="success"
        onClick={() => setKeyModalVisible(true)}
      >
        Add Key
      </Button>
      <Modal visible={keyModalVisible}>
        <Modal.Title>Add Key</Modal.Title>
        <Modal.Content>
          <Input label="Key Name" />
          <Spacer h={1}></Spacer>
          <Input disabled placeholder="Key Strength" width={8} />
          {optionsSelector}
          <Spacer h={1}></Spacer>
          <Input label="Key Expiration" />
          <Spacer h={1}></Spacer>
        </Modal.Content>
        <Modal.Action passive onClick={() => setKeyModalVisible(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action>Submit</Modal.Action>
      </Modal>
    </>
  );

  const signDocument = (
    <>
      <Button
        icon={<Plus />}
        auto
        type="success"
        onClick={() => setDocModalVisible(true)}
      >
        Sign Document
      </Button>
      <Modal visible={docModalVisible}>
        <Modal.Title>Sign Document</Modal.Title>
        <Modal.Content>
          <h3>Key To Use</h3>
          {optionsSelector}
          <Spacer h={1}></Spacer>
          <Input label="Key Strength" />
          <Spacer h={1}></Spacer>
          <Input label="Key Expiration" />
          <Spacer h={1}></Spacer>
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
        <Spacer h={1}></Spacer>
        <Card shadow width="200px" height="200px">
          <Key size={100} />
          <Spacer h={1}></Spacer>
          {addKey}
        </Card>
        <Spacer h={5}></Spacer>
        <Card shadow width="200px" height="200px">
          <FilePlus size={100} />
          <Spacer h={1}></Spacer>
          {signDocument}
        </Card>
        <Spacer h={2}></Spacer>

        <Grid.Container gap={2} justify="center" height="100px">
          <Grid xs={4}>
            <Card shadow width="200px" height="250px">
              <Key
                size={100}
                // justify="center"
                style={{ textAlign: 'center' }}
              />
              <Spacer h={1}></Spacer>
              <Button icon={<Plus />} type="success">
                Add Key
              </Button>
              <Spacer h={1}></Spacer>
              <Button icon={<Key />} type="success">
                Existing Keys
              </Button>
            </Card>
          </Grid>
          <Grid xs={6}>
            <Card shadow width="200px" height="250px">
              <FileText size={100} />
              <Spacer h={1}></Spacer>
              <Button icon={<FilePlus />} type="success">
                Sign Document
              </Button>
              <Spacer h={1}></Spacer>
              <Button icon={<FileText />} type="success">
                Signed Document
              </Button>
            </Card>
          </Grid>
        </Grid.Container>
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
