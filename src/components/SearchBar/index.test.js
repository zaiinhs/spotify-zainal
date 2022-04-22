import { render, screen, cleanup } from '@testing-library/react';
import SearchBar from './index';
import { Provider } from 'react-redux';
import store from '../../store';
import userEvent from '@testing-library/user-event';

const setup = () => render(
  <Provider store={store}>
    <SearchBar />
  </Provider>
);

describe('Search bar component should render', () => {
  beforeEach(setup);
  afterEach(cleanup);

  it('Success rendered', () => {
    const searchInput = screen.getByTestId('search-input');
    const buttonSearch = screen.getByTestId('search-button');

    expect(searchInput).toBeInTheDocument();
    expect(buttonSearch).toBeInTheDocument();
  });

  it('Can type in search track and button not disable', () => {
    const searchInput = screen.getByTestId('search-input');
    const buttonSearch = screen.getByTestId('search-button');

    userEvent.type(searchInput, 'avenged');

    expect(searchInput).toHaveValue('avenged');
    expect(buttonSearch).not.toBeDisabled();
  });

  it('Button search disable when search is empty', () => {
    const buttonSearch = screen.getByTestId('search-button');

    expect(buttonSearch).toBeDisabled();
  });
});
