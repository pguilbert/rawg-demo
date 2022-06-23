import "whatwg-fetch";
import { ApiConfigs } from "../src/api/api";
import { fetcher } from "../src/api/fetcher";

describe("fetcher", () => {
  beforeEach(() => {
    const fetchMock = jest.spyOn(window, "fetch");
    (fetchMock as jest.Mock).mockResolvedValue({
      status: 200,
      json: async () => ({}),
    });
  });

  it("should add api key to url", async () => {
    await fetcher({
      url: "http://test.com",
    });

    expect(window.fetch).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        href: `http://test.com/?key=${ApiConfigs.API_SECRET}`,
      })
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

    expect(window.fetch).toHaveBeenNthCalledWith(
      1,
      expect.objectContaining({
        href: `http://test.com/?a=123&b=456&key=${ApiConfigs.API_SECRET}`,
      })
    );
  });
});
