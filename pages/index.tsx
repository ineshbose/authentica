import { Button, Card } from '@geist-ui/core';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="pt-32">
      <h1
        className="
          text-center
          text-4xl
          md:text-6xl
          font-extrabold
          leading-tighter
          tracking-tighter
          mb-4
        "
      >
        The Online Signature
      </h1>
      <h1
        className="
          text-center
          text-5xl
          md:text-8xl
          font-extrabold
          leading-tighter
          tracking-tighter
          mb-2
          md:mb-4
          bg-clip-text
          text-transparent
          bg-gradient-to-r
          from-red-400
          to-blue-500
        "
      >
        “ Authentication ”
      </h1>
      <h1
        className="
          text-center
          text-4xl
          md:text-6xl
          font-extrabold
          leading-tighter
          tracking-tighter
          mb-4
          leading-tight
        "
      >
        system for your documents
      </h1>
      <div className="max-w-3xl mx-auto my-14">
        <div className="mt-16 sm:mt-20 flex flex-wrap justify-center">
          <Button
            auto
            type="secondary"
            scale={2}
            onClick={() => router.push('/dashboard')}
            className="m-2"
          >
            Get Started
          </Button>
        </div>
      </div>
      <div className="container mx-auto max-w-5xl w-full h-full">
        <div className="relative wrap overflow-hidden px-6 py-10 h-full">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="text-4xl mb-4 font-bold">
              How does Authentica work?
            </h2>
            <p className="text-lg sm:text-xl text-accent4">
              Authentica is a novel digital signature system, which uses
              public-key cryptography to allow users to sign digital documents,
              thereby verifying them.
            </p>
            <p className="text-lg sm:text-xl text-accent4">
              Typically, to sign a digital document, a digital signature is
              generated using a Handwriting Font, or with a picture of a
              person&apos;s actual signature. Handwriting Fonts are incecure as
              they can easily be copied. Images of signatures are also
              problamatic as it is easy to steal physical signature, once it has
              been used as a digital signature.
            </p>
            <p className="text-lg sm:text-xl text-accent4">
              Authentica was made mitigate the risks of current digital signing
              methods and allow for seamless signatures.
            </p>
            <p className="text-lg sm:text-xl text-accent4">
              Authentica does not allow you to communicate with other users
              privately. As a result, you cannot use Authentica as an end-to-end
              encrypted communications solution. Authentica does not allow you
              to share files securely.
            </p>
          </div>

          <div
            className="absolute z-0 h-full border border-accent2"
            style={{ left: '50%' }}
          ></div>

          <div className="grid md:grid-cols-2 gap-2 md:gap-10 z-20 relative">
            <Card hoverable>
              <h3 className="mb-3 font-bold text-xl">Create an account</h3>
              <p className="text-sm leading-snug tracking-wide">
                When you create an account at Authentica, a public-private key
                pair is created for your account. We will call this key-pair
                PK1. Once you have created your account, you can start signing
                digital documents. When you sign a digital document, a new key
                will be generated. This document key will be generated using
                your private account key, from PK1.
              </p>
            </Card>
            <div className="md:block"></div>

            <div className="md:block"></div>
            <Card hoverable>
              <h3 className="mb-3 font-bold text-xl">Sign a new document</h3>
              <p className="text-sm leading-snug tracking-wide">
                Let&apos;s say we want to sign a document named named
                hello-authentica.md. After successfully signing the document,
                you receive DK1, document key 1. DK1 can now be along with the
                document to verify your signature. NOTE: DK1 is not a
                cryptographic key like the keys in PK1. It unique identifier
                encrypted by the private key of PK1.
              </p>
            </Card>
            <div className="md:hidden"></div>
            <div className="md:hidden"></div>
            <Card hoverable>
              <h3 className="mb-3 font-bold text-xl">Verify signature</h3>
              <p className="text-sm leading-snug tracking-wide">
                If we want to verify someone else&apos;s signature. Then weDK1
                which was shared with the digital document, and the public
                public key of the user who shared the document, and try to
                verify that PK1 (the private key of the user who shared the
                document) was used to generate DK1.
              </p>
            </Card>
            <div className="md:block"></div>

            <div className="md:block"></div>
            <Card hoverable>
              <h3 className="mb-3 font-bold text-xl">
                We handle everything for you
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide">
                Authentica takes care of all this complicated key-business, for
                you! That being said, it&apos;s important that you understand
                the above in enough detail to securely use the system.
              </p>
            </Card>
          </div>
        </div>
      </div>
      <div
        className="
        absolute
        inset-0
        lg:mt-0
        bg-accent1
        border-accent2 border-t border-b
        pointer-events-none
      "
        aria-hidden="true"
      ></div>
    </div>
  );
};

export default Home;
