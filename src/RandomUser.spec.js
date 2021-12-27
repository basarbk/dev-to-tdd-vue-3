import RandomUser from './RandomUser.vue';
import { render, screen } from '@testing-library/vue';
import "@testing-library/jest-dom";

describe('Random User', () => {
  it('has button to load random user', () => {
    render(RandomUser);
    const loadButton = screen.queryByRole('button', {
      name: 'Load Random User'
    });
    expect(loadButton).toBeInTheDocument();
  });
});