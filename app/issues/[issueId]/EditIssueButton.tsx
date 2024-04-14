import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import { FaPencilAlt } from "react-icons/fa";

interface EditIssueButtonProps {
  issueId: number;
}

const EditIssueButton = ({ issueId }: EditIssueButtonProps) => {
  return (
    <Button>
      <FaPencilAlt />
      <Link href={`/issues/${issueId}/edit`}>Edit issue</Link>
    </Button>
  );
};

export default EditIssueButton;
