import {
  Button,
  Card,
  Input,
  Modal,
  Select,
  Spacer,
  useModal,
} from '@geist-ui/core';
import { FilePlus, Key, Plus } from '@geist-ui/icons';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

function Home() {
  const optionsSelecter = () => {
    const handler = (val: any) => console.log(val);
    return (
      <Select placeholder="Choose one" onChange={handler}>
        <Select.Option value="1">Option 1</Select.Option>
        <Select.Option value="2">Option 2</Select.Option>
      </Select>
    );
  };

  const addKey = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { setVisible, bindings } = useModal();
    return (
      <>
        <Button
          icon={<Plus />}
          auto
          type="success"
          onClick={() => setVisible(true)}
        >
          Add Key
        </Button>
        <Modal {...bindings}>
          <Modal.Title>Add Key</Modal.Title>
          <Modal.Content>
            <Input label="Key Name" />
            <Spacer h={1}></Spacer>
            <Input disabled placeholder="Key Strength" />
            {optionsSelecter()}
            <Spacer h={1}></Spacer>
            <Input label="Key Expiration" />
            <Spacer h={1}></Spacer>
          </Modal.Content>
          <Modal.Action passive onClick={() => setVisible(false)}>
            Cancel
          </Modal.Action>
          <Modal.Action>Submit</Modal.Action>
        </Modal>
      </>
    );
  };

  const signDocument = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { setVisible, bindings } = useModal();
    return (
      <>
        <Button
          icon={<Plus />}
          auto
          type="success"
          onClick={() => setVisible(true)}
        >
          Sign Document
        </Button>
        <Modal {...bindings}>
          <Modal.Title>Sign Document</Modal.Title>
          <Modal.Content>
            <h3>Key To Use</h3>
            {optionsSelecter()}
            <Spacer h={1}></Spacer>
            <Input label="Key Strength" />
            <Spacer h={1}></Spacer>
            <Input label="Key Expiration" />
            <Spacer h={1}></Spacer>
          </Modal.Content>
          <Modal.Action passive onClick={() => setVisible(false)}>
            Cancel
          </Modal.Action>
          <Modal.Action>Submit</Modal.Action>
        </Modal>
      </>
    );
  };

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Authentica</h3>
        <Spacer h={1}></Spacer>
        <Card shadow width="200px" height="200px">
          <Key size={100} />
          <Spacer h={1}></Spacer>
          {addKey()}
        </Card>
        <Spacer h={5}></Spacer>
        <Card shadow width="200px" height="200px">
          <FilePlus size={100} />
          <Spacer h={1}></Spacer>
          {signDocument()}
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
}

export default Home;
