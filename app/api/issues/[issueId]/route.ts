import { IssueSchema } from "@/app/validation";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  req: NextRequest,
  { params: { issueId } }: { params: { issueId: string } }
) => {
  const body = await req.json();
  const validation = IssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }
  console.log("here", issueId);
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(issueId) },
  });
  if (!issue) {
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });
  }
  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });
  return NextResponse.json(updatedIssue, { status: 200 });
};