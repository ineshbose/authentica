import React, { useState } from 'react';
import { Button, Fieldset, Input, Modal, Snippet } from '@geist-ui/core';
import { Coffee, FilePlus, FileText } from '@geist-ui/icons';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Document } from '@prisma/client';
import useAppContext from '../../lib/AppContext';

const Dashboard: NextPage = () => {
  const [docModalVisible, setDocModalVisible] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedDoc, setSelectedDoc] = useState<Document>();
  const { user, documents = [{ signature: 'hi' }] } = useAppContext();
  const router = useRouter();

  if (!user) {
    router.push('/login');
  }

  return (
    <div className="pt-16">
      <div className="border-b border-accent2">
        <div className="mx-auto max-w-5xl pt-8 pb-12 text-center">
          <FileText className="h-20 w-20 align-center block mx-auto mb-6" />
          <Button
            icon={<FilePlus />}
            scale={1.5}
            shadow
            type="success"
            className="inline-block"
            onClick={() => setDocModalVisible(true)}
          >
            Sign Document
          </Button>
          <Modal visible={docModalVisible} disableBackdropClick>
            <Modal.Title>Sign document</Modal.Title>
            <Modal.Content>
              <Input
                prefix-label="Document Name"
                //   autofocus="true"
                onChange={() => {}}
                className="w-full mb-4"
                //   type="inputError.name"
                placeholder="
                    inputError.name === 'danger' ? 'Name is required' : ''
                  "
              ></Input>
            </Modal.Content>
            <Modal.Action passive onClick={() => setDocModalVisible(false)}>
              Cancel
            </Modal.Action>
            <Modal.Action>Submit</Modal.Action>
          </Modal>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 my-12">
        {documents && documents.length > 0 ? (
          <div className="grid md:grid-cols-3 grid-cols-auto sm:grid-cols-2 gap-8 md:gap-10">
            {documents.map((document) => (
              <div
                key={document.signature}
                className="cursor-pointer"
                onClick={() => setSelectedDoc(document as unknown as Document)}
              >
                <Fieldset className="text-accent8 hover:drop-shadow-xl">
                  <span className="text-lg font-semibold">{`${document.signature?.slice(
                    0,
                    15
                  )}${
                    (document.signature || '').length > 15 ? '..' : ''
                  }`}</span>
                  <Snippet
                    text={`https://authentica-io.vercel.app/${user?.pubkey}/${document.signature}/`}
                    type="lite"
                    width="60%"
                  ></Snippet>
                </Fieldset>
              </div>
            ))}
          </div>
        ) : (
          <div className="max-w-5xl mx-auto my-24">
            <Coffee className="h-12 w-12 mx-auto" />
            <p className="text-center font-semibold">No documents found</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
