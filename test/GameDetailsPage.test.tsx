import { render, screen, waitFor } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { GameDetailsPage } from "../src/components/GameDetailsPage/GameDetailsPage";
import { gta } from "./data/game-details";
import "@testing-library/jest-dom";
import { ApiConfigs } from "../src/api/api";
import "whatwg-fetch";

describe("GameDetailsPage", () => {
  const server = setupServer(
    rest.get(`${ApiConfigs.BASE_URL}/games/123`, (req, res, ctx) => {
      return res(ctx.json(gta));
    }),
    rest.get(`${ApiConfigs.BASE_URL}/games/http500`, (req, res, ctx) => {
      return res(ctx.status(500));
    })
  );

  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it("should render", async () => {
    render(
      <MemoryRouter initialEntries={["/games/123"]}>
        <Routes>
          <Route path="games/:id" element={<GameDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText("Grand Theft Auto V TEST"));

    expect(screen.getByText("Grand Theft Auto V TEST")).toBeInTheDocument();
  });

  it("should render on api error", async () => {
    render(
      <MemoryRouter initialEntries={["/games/http500"]}>
        <Routes>
          <Route path="games/:id" element={<GameDetailsPage />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => screen.getByRole("alert"));

    expect(screen.getByRole("alert")).toHaveTextContent(
      "Oops! Something went wrong."
    );
  });
});
