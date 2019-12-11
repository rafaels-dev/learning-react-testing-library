import React from 'react';
import { render, fireEvent, waitForElement, wait } from '@testing-library/react';

import axiosMock from 'axios';

import Fetch from './fetch';

test.only('loads and displays greetings', async () => {
    const url = '/greeting';

    axiosMock.get.mockResolvedValueOnce({
        data: { greeting: 'hello there' }
    });

    const { getByText, getByRole, container, asFragment } = render(<Fetch url={url} />);
    fireEvent.click(getByText('Load Greeting'));
    const greetingTextNode = await waitForElement(
        () => getByRole('heading')
    );

    expect(axiosMock.get).toHaveBeenCalledTimes(1);
    expect(axiosMock.get).toHaveBeenCalledWith(url);
    expect(getByRole('heading')).toHaveTextContent('hello there');
    expect(getByRole('button')).toHaveAttribute('disabled');
    expect(container).toMatchSnapshot();
});