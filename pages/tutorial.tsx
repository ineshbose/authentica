import { useState } from 'react';
import { Button, Card, Spacer } from '@geist-ui/core';
import { Key } from '@geist-ui/icons';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  const [selectedOption] = useState<string | string[]>();

  console.log(selectedOption);

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>Authentica</h3>
        <br></br>
        <h5 className={styles.subtitle}>Tutorial</h5>
        <Spacer h={4}></Spacer>

        <Card shadow width="70%">
          <Key size={100} />
          <Spacer h={1}></Spacer>
          This tutorial will cover some of the most imporant parts of using
          Authentica, and will provide you with an overview of the technologies
          used to securely sign your digital documents.
          <br></br>
          <br></br>
          <h2>What is Authentica?</h2>
          Authentica is a novel digital signature system, which uses public-key
          cryptography to allow users to sign digital documents, thereby
          verifying them. Typically, to sign a digital document, a digital
          signature is generated using a Handwriting Font, or with a picture of
          a person&apos;s actual signature.
          <br></br>
          <br></br>
          The first method is insecure as Handwriting Fonts can easily be
          copied. The second method is problematic, given that it is easy to
          steal a copy of the physical signature, once it has been used for
          digital verification. As a result, Authentica was made to allow for
          seamless digital signatures.
          <br></br>
          <br></br>
          <h2>What is Authentica NOT?</h2>
          Authentica does not allow you to communicate with other users
          privately. As a result, you cannot use Authentica as an end-to-end
          encrypted communications solution.
          <br></br>
          <br></br>
          Authentica does not allow you to share files securely.
          <br></br>
          <br></br>
          <h2>Cool, so how does it work?</h2>
          When you create an account at Authentica, a public key is created for
          your account. In our explanation, we will call this key <b>PK1</b>.
          <br></br>
          <br></br>
          Once you have created your account, you can start signing digital
          documents. When you sign a digital document, a new key will be
          generated. This document key will be generated using your account key,{' '}
          <b>PK1</b>. Let&apos;s say we want to sign a document named{' '}
          <b>hello_authentica.txt</b>. After successfully signing the document,
          you receive <b>DK1</b>, document key 1. <b>DK1</b> can now be shared
          along with the document to verify your signature.
          <br></br>
          <br></br>
          Let&apos;s say we want to verify someone else&apos;s signature. Then
          we take <b>DK1</b> which was shared with the digital document, and the
          public key of the user who shared the document, and try to verify that{' '}
          <b>PK1</b> (the public key of the user who shared the document) was
          used to generate <b>DK1</b>.<br></br>
          <br></br>
          Authentica takes care of all this complicated key-business, for you!
          That being said, it&apos;s important that you understand the above in
          enough detail to securely use the system.
          <br></br>
          <br></br>
          <Link href="/dashboard" passHref>
            <Button type="success">Get Started</Button>
          </Link>
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
