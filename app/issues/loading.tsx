import { Button, Table } from "@radix-ui/themes";
import Link from "next/link";
import { Skeleton } from "@nextui-org/skeleton";

const IssuesLoading = () => {
  const fakeIssues = [1, 2, 3, 4, 5];
  return (
    <div>
      <div className="pb-5">
        <Link href="/issues/new">
          <Button>Create new issue</Button>
        </Link>
      </div>

      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created At
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {fakeIssues.map((fakeIssue) => (
            <Table.Row key={fakeIssue}>
              <Table.RowHeaderCell>
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-5 w-full bg-secondary"></div>
                </Skeleton>
                <div className="block md:hidden">
                  <Skeleton className="w-3/5 rounded-lg">
                    <div className="h-5 w-full bg-secondary"></div>
                  </Skeleton>
                </div>
              </Table.RowHeaderCell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-5 w-full bg-secondary"></div>
                </Skeleton>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <Skeleton className="w-3/5 rounded-lg">
                  <div className="h-5 w-full bg-secondary"></div>
                </Skeleton>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

export default IssuesLoading;
