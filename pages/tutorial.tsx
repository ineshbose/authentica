import { Card } from '@geist-ui/core';
import { Edit3, FilePlus, Heart, UserPlus } from '@geist-ui/icons';
import { NextPage } from 'next';
import Image from 'next/image';

const Tutorial: NextPage = () => {
  return (
    <div className="pt-32">
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
            {/* <p className="text-lg sm:text-xl text-accent4">
              Typically, to sign a digital document, a digital signature is
              generated using a Handwriting Font, or with a picture of a
              person&apos;s actual signature. Handwriting Fonts are insecure as
              they can easily be copied. Images of signatures are also
              problematic as it is easy to steal a physical signature, once it
              has been used as a digital signature.
            </p> */}
            <p className="text-lg sm:text-xl text-accent4">
              Authentica was made to mitigate the risks of current digital
              methods and to allow for seamless signatures.
            </p>
            {/* <p className="text-lg sm:text-xl text-accent4">
              Authentica does not allow you to communicate with other users
              privately. As a result, you cannot use Authentica as an end-to-end
              encrypted communications solution. Authentica does not allow you
              to share files securely.
            </p> */}
          </div>

          <div
            className="absolute z-0 h-full border border-accent2"
            style={{ left: '50%' }}
          ></div>

          <div className="grid md:grid-cols-2 gap-2 md:gap-10 z-20 relative">
            <Card hoverable>
              <h3 className="mb-3 font-bold text-xl">
                <UserPlus className="inline-block" /> Create an account
              </h3>
              <p className="text-sm leading-snug tracking-wide">
                When you create an account at Authentica, a public-private key
                pair is created for your account. We will call this key-pair
                PK1. Once you have created your account, you can start signing
                digital documents. When you sign a digital document, a new key
                will be generated. This document key will be generated using
                your private account key, from PK1.
              </p>
              <Image
                width={800}
                height={560}
                src="/register.png"
                alt="Registration form"
              />
            </Card>
            <div className="md:block"></div>

            <div className="md:block"></div>
            <Card hoverable>
              <h3 className="mb-3 font-bold text-xl">
                <FilePlus className="inline-block" /> Sign a new document
              </h3>
              <p className="text-sm leading-snug tracking-wide">
                Let&apos;s say we want to sign a document named named
                hello-authentica.md. After successfully signing the document,
                you receive DK1, document key 1. DK1 can now be used along with
                the document to verify your signature. NOTE: DK1 is not a
                cryptographic key like the keys in PK1. It is a unique
                identifier encrypted by the private key of PK1.
              </p>
              <Image
                width={800}
                height={480}
                src="/sign_form.png"
                alt="Signature form"
              />
            </Card>
            <div className="md:hidden"></div>
            <div className="md:hidden"></div>
            <Card hoverable>
              <h3 className="mb-3 font-bold text-xl">
                <Edit3 className="inline-block" /> Verify signature
              </h3>
              <p className="text-sm leading-snug tracking-wide">
                If we want to verify someone else&apos;s signature. Then we use
                DK1 which was shared with the digital document, and the public
                key of the user who shared the document, and try to verify that
                PK1 (the private key of the user who shared the document) was
                used to generate DK1.
              </p>
              <Image
                width={800}
                height={560}
                src="/doc_card.png"
                alt="Document display card"
              />
            </Card>
            <div className="md:block"></div>

            <div className="md:block"></div>
            <Card hoverable>
              <h3 className="mb-3 font-bold text-xl">
                <Heart className="inline-block" />
                We handle everything for you
              </h3>
              <p className="text-sm font-medium leading-snug tracking-wide">
                Authentica takes care of all this complicated key-business, for
                you! That being said, it&apos;s important that you understand
                the above in enough detail to securely use the system.
              </p>
              <Image
                width={800}
                height={480}
                src="/verified_badge.png"
                alt="Verification shield"
              />
            </Card>
          </div>
        </div>
      </div>
      <div
        className="
          text-center
          inset-0
          lg:mt-0
          bg-accent1
          border-accent2 border-t border-b
          pointer-events-none
        "
        aria-hidden="true"
      >
        <Image
          width={800}
          height={560}
          src="/signature_diagram.png"
          alt="Authentica Signature Diagram"
        />
      </div>
    </div>
  );
};

export default Tutorial;
