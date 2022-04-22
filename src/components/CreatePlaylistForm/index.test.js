import { render, screen, cleanup } from '@testing-library/react';
import CreatePlaylistForm from './index';
import { Provider } from 'react-redux';
import store from '../../store';
import userEvent from '@testing-library/user-event';

const setup = () => render(
  <Provider store={store}>
    <CreatePlaylistForm />
  </Provider>
);

describe('Form create playlist component should render', () => {
  beforeEach(setup);
  afterEach(cleanup);

  it('Success rendered', () => {
    const titleInput = screen.getByTestId('title-playlist');
    const descriptionInput = screen.getByTestId('description-playlist');
    const buttonCreate = screen.getByTestId('btn-create-playlist');

    expect(titleInput).toBeInTheDocument();
    expect(descriptionInput).toBeInTheDocument();
    expect(buttonCreate).toBeInTheDocument();
  });

  it('Can type in form', () => {
    const titleInput = screen.getByTestId('title-playlist');
    const descriptionInput = screen.getByTestId('description-playlist');

    userEvent.type(titleInput, 'New Playlist');
    userEvent.type(descriptionInput, 'New Playlist Description');

    expect(titleInput).toHaveValue('New Playlist');
    expect(descriptionInput).toHaveValue('New Playlist Description');
  });

  it('Show error title when title length is less than 10', () => {
    const titleInput = screen.getByTestId('title-playlist');
    const descriptionInput = screen.getByTestId('description-playlist');
    const buttonCreate = screen.getByTestId('btn-create-playlist');

    userEvent.type(titleInput, 'New');
    userEvent.type(descriptionInput, 'New Playlist Description');
    userEvent.click(buttonCreate);

    const errorText = screen.getByText(/Title must be at least 10 characters long/i);

    expect(errorText).toBeInTheDocument();
  });
});
