import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const IssuesPage = () => {
  return (
    <div>
      IssuesPage{" "}
      <Link href="/issues/new">
        <Button>Create new issue</Button>
      </Link>
    </div>
  );
};

export default IssuesPage;
