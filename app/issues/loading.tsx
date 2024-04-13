import { Skeleton } from "@nextui-org/skeleton";
import { Table } from "@radix-ui/themes";
import Toolbar from "./Toolbar";

const IssuesLoading = () => {
  const fakeIssues = [1, 2, 3, 4, 5];
  return (
    <div>
      <Toolbar/>

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
