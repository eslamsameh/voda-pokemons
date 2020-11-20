import { render, screen } from '@testing-library/react';
import App from './App';
import { testsHome } from './test/home.test';

test('render header with Pokemons link', () => {
  render(<App />);
  const linkElement = screen.getByText('Pokemons');
  expect(linkElement).toBeInTheDocument();
});



