import { Button, Card, Divider, Grid, Spacer } from '@geist-ui/core';
import { Key } from '@geist-ui/icons';
import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Tutorial: NextPage = () => {
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

      <Card shadow width="70%">
        <Grid.Container gap={2} justify="center" height="100px">
          <Key size={100} />
        </Grid.Container>
        <Spacer h={1}></Spacer>
        This tutorial covers some of the most imporant parts of using
        Authentica, and will provide you with an overview of the technologies
        used to securely sign your digital documents.
        <Spacer h={1}></Spacer>
        <h2>What is Authentica?</h2>
        <Divider h="1px" my={0} />
        Authentica is a novel digital signature system, which uses public-key
        cryptography to allow users to sign digital documents, thereby verifying
        them.
        <Spacer h={1}></Spacer>
        Typically, to sign a digital document, a digital signature is generated
        using a Handwriting Font, or with a picture of a person&apos;s actual
        signature. Handwriting Fonts are incecure as they can easily be copied.
        Images of signatures are also problamatic as it is easy to steal
        physical signature, once it has been used as a digital signature.
        <Spacer h={1}></Spacer>
        Authentica was made mitigate the risks of current digital signing
        methods and allow for seamless signatures.
        <Spacer h={1}></Spacer>
        <h2>Cool, so how does it work?</h2>
        <Divider h="1px" my={0} />
        When you create an account at Authentica, a public-private key pair is
        created for your account. We will call this key-pair <b>PK1</b>. Once
        you have created your account, you can start signing digital documents.
        <Spacer h={1}></Spacer>
        When you sign a digital document, a new key will be generated. This
        document key will be generated using your private account key, from{' '}
        <b>PK1</b>.<Spacer h={1}></Spacer>
        Let&apos;s say we want to sign a document named named{' '}
        <b>hello_authentica.txt</b>. After successfully signing the document,
        you receive <b>DK1</b>, document key 1. <b>DK1</b> can now be along with
        the document to verify your signature. <Spacer h={0.1}></Spacer>
        <b>
          NOTE: DK1 is not a crtypographic key like the keys in PK1. It unique
          identifier encrypted by the private key of PK1.
        </b>
        <Spacer h={1}></Spacer>
        If we want to verify someone else&apos;s signature. Then we
        <b>DK1</b> which was shared with the digital document, and the public
        public key of the user who shared the document, and try to verify that{' '}
        <b>PK1</b> (the private key of the user who shared the document) was
        used to generate <b>DK1</b>.<Spacer h={1}></Spacer>
        Authentica takes care of all this complicated key-business, for you!
        <Spacer h={0.1}></Spacer>
        That being said, it&apos;s important that you understand the above in
        enough detail to securely use the system.
        <Spacer h={1}></Spacer>
        <Grid.Container gap={2} justify="center" height="560px">
          <Image
            src="/Authentica_Signature_Diagram.png"
            alt="Authentica Signature Diagram"
            width={800}
            height={560}
            draggable={false}
          />
        </Grid.Container>
        <Spacer h={1}></Spacer>
        <h2>What is Authentica NOT?</h2>
        <Divider h="1px" my={0} />
        Authentica does not allow you to communicate with other users privately.
        As a result, you cannot use Authentica as an end-to-end encrypted
        communications solution.
        <Spacer h={1}></Spacer>
        Authentica does not allow you to share files securely.
        <Spacer h={3}></Spacer>
        <Grid.Container gap={2} justify="center" height="100px">
          <Link href="/dashboard" passHref>
            <Button type="success">Get Started</Button>
          </Link>
        </Grid.Container>
      </Card>
    </div>
  );
};

export default Tutorial;
