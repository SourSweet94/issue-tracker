import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import React from "react";

interface IssueDetailProps {
  params: { issueId: string };
}

const IssueDetailPage = async ({ params: { issueId } }: IssueDetailProps) => {
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(issueId) },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.description}</p>
      <p>{issue.status}</p>
      <p>{issue.createdAt.toLocaleDateString()}</p>
    </div>
  );
};

export default IssueDetailPage;
