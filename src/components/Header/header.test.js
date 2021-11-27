import {render, screen} from '@testing-library/react';
import Header from './Header.jsx';

describe('Header.jsx', () => {
    it('Should render the correct header', () => {
      render(<Header />)
      const logoElement = screen.getAllByAltText('logo com a ilustração de um deserto iluminado')
      expect(logoElement).toBeInTheDocument()
    })
})