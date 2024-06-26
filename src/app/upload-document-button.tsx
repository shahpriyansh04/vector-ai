"use client";
import { Button } from "@/components/ui/button";
import { useMutation } from "convex/react";
import { api } from "../../convex/_generated/api";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import UploadDocumentForm from "./upload-document-form";
import { useState } from "react";
import { Upload } from "lucide-react";

export default function CreateDocumentButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Upload className="mr-4 h-4 w-4" />
          Upload Document
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload a Document</DialogTitle>
          <DialogDescription>Lorem ipsum</DialogDescription>
          <UploadDocumentForm onUpload={() => setIsOpen(false)} />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
