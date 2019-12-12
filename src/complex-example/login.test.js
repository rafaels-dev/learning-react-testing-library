import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Login from './login';
import { exportAllDeclaration } from '@babel/types';

 test('allows the user to login successfully', async () => {
    const fakeUserResponse = { token: 'fake_user_token' };
    jest.spyOn(window, 'fetch').mockImplementationOnce(() => {
        return Promise.resolve({
            json: () => Promise.resolve(fakeUserResponse)
        });
    });

    const { getByText, getByLabelText, findByRole } = render(<Login/>);

    fireEvent.change(getByLabelText(/username/i), { target: { value: 'chuck' } });
    fireEvent.change(getByLabelText(/password/i), { target: { value: 'norris' } });

    fireEvent.click(getByText(/submit/i));

    const alert = await findByRole('alert');

    expect(alert).toHaveTextContent(/congrats/i);
    expect(window.localStorage.getItem('token')).toEqual(fakeUserResponse.token);
 });