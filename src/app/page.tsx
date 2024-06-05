"use client";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import CreateDocumentButton from "./create-document-button";
import DocumentCard from "./document-card";

export default function Home() {
  const documents = useQuery(api.documents.getDocuments);
  const createDocument = useMutation(api.documents.createDocument);
  return (
    <main className=" p-24 space-y-8">
      <div className="flex justify-between">
        <h1 className="text-4xl">My Documents</h1>
        <CreateDocumentButton />
      </div>
      <div className="grid grid-cols-4 gap-8 w-full">
        {documents?.map((doc) => <DocumentCard document={doc} key={doc._id} />)}
      </div>
    </main>
  );
}
