import StatusBadge from "@/app/components/StatusBadge";
import prisma from "@/prisma/client";

import { Card, Flex, Heading, Text } from "@radix-ui/themes";
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
      <Heading>{issue.title}</Heading>
      <Flex gap="5" className="my-3 justify-items-center">
        <StatusBadge status={issue.status} />
        <Text>{issue.createdAt.toLocaleDateString()}</Text>
      </Flex>
      <Card> {issue.description}</Card>
    </div>
  );
};

export default IssueDetailPage;
