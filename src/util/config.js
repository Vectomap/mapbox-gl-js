// @flow strict

type Config = {|
  API_URL: string,
  EVENTS_URL: ?string,
  SESSION_PATH: string,
  FEEDBACK_URL: string,
  REQUIRE_ACCESS_TOKEN: boolean,
  TILE_URL_VERSION: string,
  RASTER_URL_PREFIX: string,
  ACCESS_TOKEN: ?string,
  MAX_PARALLEL_IMAGE_REQUESTS: number
|};

const config: Config = {
    API_URL: 'https://api.mapbox.com',
    get EVENTS_URL() {
        if (!this.API_URL) { return null; }
        if (this.API_URL.indexOf('https://api.mapbox.cn') === 0) {
            return 'https://events.mapbox.cn/events/v2';
        } else if (this.API_URL.indexOf('https://api.mapbox.com') === 0) {
            return 'https://events.mapbox.com/events/v2';
        } else {
            return null;
        }
    },
    SESSION_PATH: '/map-sessions/v1',
    FEEDBACK_URL: 'https://apps.mapbox.com/feedback',
    TILE_URL_VERSION: 'v4',
    RASTER_URL_PREFIX: 'raster/v1',
    REQUIRE_ACCESS_TOKEN: true,
    ACCESS_TOKEN: null,
    MAX_PARALLEL_IMAGE_REQUESTS: 16
};

export default config;
