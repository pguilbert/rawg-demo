import { Button, ButtonGroup, Flex } from "@chakra-ui/react";

type SimplePaginationProps = {
  hasPrevious: boolean;
  hasNext: boolean;
  currentPage: number;
  goToNext: () => void;
  goToPrevious: () => void;
};

export const SimplePagination = ({
  hasPrevious,
  hasNext,
  goToNext,
  goToPrevious,
  currentPage,
}: SimplePaginationProps) => {
  return (
    <Flex p="6" justifyContent="center">
      <ButtonGroup isAttached variant="outline">
        {hasPrevious && <Button onClick={goToPrevious}>Previous</Button>}
        <Button>{currentPage}</Button>
        {hasNext && <Button onClick={goToNext}>Next</Button>}
      </ButtonGroup>
    </Flex>
  );
};
