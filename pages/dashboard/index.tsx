import React, { useEffect, useState } from 'react';
import { Button, Fieldset, Input, Modal, Snippet } from '@geist-ui/core';
import { Coffee, FilePlus, FileText, Trash } from '@geist-ui/icons';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { Document } from '@prisma/client';
import useAppContext from '../../lib/AppContext';

const Dashboard: NextPage = () => {
  const [docModalVisible, setDocModalVisible] = useState<boolean>(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedDoc, setSelectedDoc] = useState<Partial<Document>>();
  const {
    user,
    documents,
    helpers: { addDocument, removeDocument },
  } = useAppContext();
  const [documentName, setDocumentName] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push('/login');
    }
  }, [user, router]);

  const createDocument = async () => {
    if (documentName) {
      await addDocument(documentName);
      setDocModalVisible(false);
    } else {
      console.log('Enter name');
    }
  };

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
                autoFocus
                label="Document Name"
                value={documentName}
                onChange={(e) => setDocumentName(e.target.value)}
                className="w-full mb-4"
              />
              <Input
                disabled
                label="Current Time"
                value={`${new Date().toLocaleString()}`}
                className="w-full my-4"
              />
              <p className="text-sm text-gray-500">
                It is recommended to use unique document names to help you
                distinguish between them.
              </p>
            </Modal.Content>
            <Modal.Action passive onClick={() => setDocModalVisible(false)}>
              Cancel
            </Modal.Action>
            <Modal.Action onClick={createDocument}>Submit</Modal.Action>
          </Modal>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 my-12">
        {documents && documents.length > 0 ? (
          <div className="grid md:grid-cols-3 grid-cols-auto sm:grid-cols-2 gap-8 md:gap-10">
            {documents
              .map((document) => ({
                ...document,
                signature: JSON.parse(document.signature || '{}'),
              }))
              .map((document) => (
                <div
                  key={document.signature}
                  className="cursor-pointer"
                  onClick={() => setSelectedDoc(document as any)}
                >
                  <Fieldset className="text-accent8 hover:drop-shadow-xl">
                    <span className="text-lg font-semibold">{`${document.signature.name?.slice(
                      0,
                      15
                    )}${
                      (document.signature.name || '').length > 15 ? '..' : ''
                    }`}</span>
                    <Snippet
                      text={`https://authentica-io.vercel.app/${user?.pubkey}/${document.id}/`}
                      type="lite"
                      width="60%"
                    />
                    <Fieldset.Footer>
                      <p className="h-6"></p>
                      <span>
                        <Button
                          type="abort"
                          auto
                          icon={<Trash />}
                          onClick={() => removeDocument(document.id || '')}
                        ></Button>
                      </span>
                    </Fieldset.Footer>
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
