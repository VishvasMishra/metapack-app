import Rate from '@pages/rate';
import { render, screen } from '@test/utils';

jest.mock('@lib/hooks', () => require('@mocks/hooks'));

describe('Rate', () => {
    test('renders correctly', () => {
        const { container } = render(<Rate />);
        const heading = screen.getByRole('heading', { level: 2 });

        expect(container.firstChild).toMatchSnapshot();
        expect(heading).toBeInTheDocument();
    });
});
