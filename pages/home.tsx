import { useState } from 'react';
import {
  Button,
  Card,
  Input,
  Modal,
  Select,
  Spacer,
  Grid,
  Tooltip,
} from '@geist-ui/core';
import { FilePlus, FileText, Key, Plus } from '@geist-ui/icons';
import { NextPage } from 'next';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [selectedOption, setSelectedOption] = useState<string | string[]>();
  const [keyModalVisible, setKeyModalVisible] = useState<boolean>(false);
  const [docModalVisible, setDocModalVisible] = useState<boolean>(false);
  const [existKeysModalVisible, setExistKeysModalVisible] =
    useState<boolean>(false);
  const [signedDocsModalVisible, setSignedDocsModalVisible] =
    useState<boolean>(false);

  console.log(selectedOption);

  const optionsSelector = (
    <Select placeholder="Choose A Key" onChange={setSelectedOption}>
      <Select.Option value="1">Key 1</Select.Option>
      <Select.Option value="2">Key 2</Select.Option>
    </Select>
  );

  const optionsSelectorKey = (
    <Select placeholder="Choose A Strength" onChange={setSelectedOption}>
      <Select.Option value="1">Low</Select.Option>
      <Select.Option value="2">Medium</Select.Option>
      <Select.Option value="2">High</Select.Option>
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
          <Input disabled placeholder="Key Strength" width={7} />
          {optionsSelectorKey}
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

  const existingKeys = (
    <>
      <Button
        icon={<Key />}
        auto
        type="success"
        onClick={() => setExistKeysModalVisible(true)}
      >
        Existing Keys
      </Button>
      <Modal visible={existKeysModalVisible}>
        <Modal.Title>Existing Keys</Modal.Title>
        <Modal.Content>hi</Modal.Content>
        <Modal.Action passive onClick={() => setExistKeysModalVisible(false)}>
          Close
        </Modal.Action>
      </Modal>
    </>
  );

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
          <h5>Key To Use</h5> {optionsSelector}
          <Spacer h={1}></Spacer>
          <Input label="Document Name: " />
        </Modal.Content>
        <Modal.Action passive onClick={() => setDocModalVisible(false)}>
          Cancel
        </Modal.Action>
        <Modal.Action>Submit</Modal.Action>
      </Modal>
    </>
  );

  const signedDocs = (
    <>
      <Button
        icon={<FileText />}
        auto
        type="success"
        onClick={() => setSignedDocsModalVisible(true)}
      >
        Signed Documents
      </Button>
      <Modal visible={signedDocsModalVisible}>
        <Modal.Title>Signed Documents</Modal.Title>
        <Modal.Content>hi</Modal.Content>
        <Modal.Action passive onClick={() => setSignedDocsModalVisible(false)}>
          Close
        </Modal.Action>
      </Modal>
    </>
  );

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Authentica</h3>
        <Spacer h={4}></Spacer>

        <Grid.Container gap={2} justify="center">
          <Grid xs={8} md={4}>
            <Card shadow width="210px" height="250px">
              <Key size={100} />
              <Spacer h={1}></Spacer>
              <Tooltip text={'tip.'} placement="left">
                {addKey}
              </Tooltip>
              <Spacer h={1}></Spacer>
              <Tooltip text={'tip.'} placement="left">
                {existingKeys}
              </Tooltip>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card shadow width="210px" height="250px">
              <FileText size={100} />
              <Spacer h={1}></Spacer>
              <Tooltip text={'tip.'} placement="right">
                {signDocument}
              </Tooltip>
              <Spacer h={1}></Spacer>
              <Tooltip text={'tip.'} placement="right">
                {signedDocs}
              </Tooltip>
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
