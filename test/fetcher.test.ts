import { ApiConfigs } from "../src/api/api";
import { fetcher } from "../src/api/fetcher";

global.fetch = <any>jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(),
  })
);

describe("fetcher", () => {
  const fetchMock = fetch as unknown as jest.Mock;

  beforeEach(() => {
    fetchMock.mockClear();
  });

  it("should add api key to url", async () => {
    await fetcher({
      url: "http://test.com",
    });

    expect(fetchMock.mock.calls[0][0].toString()).toBe(
      `http://test.com/?key=${ApiConfigs.API_SECRET}`
    );
  });

  it("should add search params to url with api key", async () => {
    await fetcher({
      url: "http://test.com",
      params: {
        a: "123",
        b: "456",
      },
    });

    expect(fetchMock.mock.calls[0][0].toString()).toBe(
      `http://test.com/?a=123&b=456&key=${ApiConfigs.API_SECRET}`
    );
  });
});
