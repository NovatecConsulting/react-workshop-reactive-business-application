import { describe, expect, vi } from 'vitest';
import { ControlledNicknameForm } from '../ControlledNicknameForm';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

const validNickname = 'newNickname';
const invalidNickname = 'newNickname9';
const updateMock = vi.fn();
const errorText = 'Es sind nur Buchstaben erlaubt';

describe('ControlledNickname Unit Tests', () => {
  it('renders the component correctly', () => {
    const fix = render(
      <ControlledNicknameForm updateNickname={updateMock} value={validNickname} />,
      { wrapper: BrowserRouter }
    );
    expect(fix).toMatchSnapshot();
  });

  it('renders the component correctly', async () => {
    const fix = render(
      <ControlledNicknameForm updateNickname={updateMock} value={validNickname} />,
      { wrapper: BrowserRouter }
    );

    const textField = screen.getByRole('textbox');

    //Act
    await userEvent.type(textField, invalidNickname);

    expect(fix).toMatchSnapshot();
  });

  it('shows an error when provided with a nickname containing numbers', async () => {
    //Arrange
    render(<ControlledNicknameForm updateNickname={updateMock} value={''} />, {
      wrapper: BrowserRouter,
    });

    const textField = screen.getByRole('textbox');

    //Act
    await userEvent.type(textField, invalidNickname);
    const errorMsg = screen.queryByText(errorText);

    //  Assert
    expect(errorMsg).not.toBeNull();
  });
});
