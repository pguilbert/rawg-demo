import { useSearchParams } from "react-router-dom";
import { useApiGamesList } from "../../api/hooks/useApiGamesList";
import { usePreviousDefinedValue } from "../../hooks/usePrevious";
import { LoadingOverlay } from "../LoadingOverlay/LoadingOverlay";
import { SimplePagination } from "../Pagination/SimplePagination";
import { GameList } from "./GameList";

export const GameListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // Parse current page param
  const currentPage: number | undefined =
    (() => {
      const pageStr = searchParams.get("page");
      const page = pageStr ? parseInt(pageStr) : undefined;
      if (page && !isNaN(page)) {
        return page;
      }
      return undefined;
    })() ?? 1;

  // Pagination utils
  const goToPage = (page: number) => {
    setSearchParams({ page: page.toString() });
    window.scrollTo(0, 0); //Scroll to the top of the windows to see the new page from the start
  };
  const goToNextPage = () => goToPage(currentPage + 1);
  const goToPreviousPage = () => goToPage(currentPage - 1);

  const { data, isLoading } = useApiGamesList({
    page: currentPage,
  });

  //PGU: When loading, we keep the old items displayed to avoid a layout shift at each loading.
  //(The loading indicator is displayed above the old items
  const previousItems = usePreviousDefinedValue(data?.results);
  const itemsToShow = data?.results ?? previousItems;

  return (
    <div>
      {itemsToShow && <GameList items={itemsToShow} />}

      <SimplePagination
        hasNext={Boolean(data?.next)}
        goToNext={goToNextPage}
        hasPrevious={Boolean(data?.previous)}
        goToPrevious={goToPreviousPage}
        currentPage={currentPage}
      />

      {isLoading && <LoadingOverlay />}
    </div>
  );
};
