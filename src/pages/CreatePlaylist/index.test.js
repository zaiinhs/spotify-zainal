import { render, screen, cleanup } from '@testing-library/react';
import CreatePlaylist from './index';
import { Provider } from 'react-redux';
import store from '../../store';
import userEvent from '@testing-library/user-event';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import config from '../../lib/config';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

const setup = () => render(
  <Provider store={store}>
    <HelmetProvider>
      <Router>
        <Switch>
          <CreatePlaylist />
        </Switch>
      </Router>
    </HelmetProvider>
  </Provider>
);

const server = setupServer(
  rest.get(`${config.SPOTIFY_BASE_URL}/search`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
      tracks: {
        items: [
          {
            id: '1',
            album: {
              images: [
                {
                  url: 'test image url',
                },
              ]
            },
            name: 'test title',
            artists: [
              {
                name: 'test artist',
              },
            ],
            uri: 'test uri',
            duration_ms: 1000,
            external_urls: {
              spotify: 'test spotify url',
            },
          }
        ],
      }
    }));
  }),
);

describe('Create playlist page should render', () => {
  beforeEach(setup);
  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
    cleanup();
  });
  afterAll(() => server.close());

  it('Should render tracks after search', async () => {
    const searchInput = screen.getByTestId('search-input');
    const buttonSearch = screen.getByTestId('search-button');

    userEvent.type(searchInput, 'avenged');
    userEvent.click(buttonSearch);

    await screen.findByText(/test title/i);
    const trackList = screen.getByTestId('tracks-list');

    // eslint-disable-next-line testing-library/no-node-access
    expect(trackList.children).toHaveLength(1);
    expect(screen.getByText('test title')).toBeInTheDocument();
  });

  it('Should render track items after search', async () => {
    const searchInput = screen.getByTestId('search-input');
    const buttonSearch = screen.getByTestId('search-button');

    userEvent.type(searchInput, 'avenged');
    userEvent.click(buttonSearch);

    await screen.findByText(/test title/i);

    const imgTrack = screen.getByTestId('track-img');
    const titleTrack = screen.getByTestId('track-title');
    const durationTrack = screen.getByTestId('track-duration');
    const artistTrack = screen.getByTestId('track-artist');
    const btnTrack = screen.getByTestId('track-btn-select');

    expect(imgTrack).toHaveAttribute('src', 'test image url');
    expect(titleTrack).toHaveTextContent('test title');
    expect(durationTrack).toHaveTextContent('00:01');
    expect(artistTrack).toHaveTextContent('test artist');
    expect(btnTrack).toBeInTheDocument();
  });
});
