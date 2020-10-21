import React from 'react';
import { render } from '@testing-library/react';
import { KVEditConfigType } from '@base/src/components/KVEditor/KVEditor.types';
import KVItemEdit from '../KVItemEdit';

describe('KVItemEdit', () => {
  const validateKey = new RegExp(/^[a-zA-Z][a-zA-Z0-9]*$/);
  const dispatch = jest.fn();

  const tree = (
    options: KVEditConfigType = { theme: 'light', validateKey, typeNotation: 'string', nested: false }
  ) => render(<KVItemEdit keys={['foo']} dispatch={dispatch} editorOptions={options} />);

  test('renders properly', () => {
    const { asFragment } = tree();
    expect(asFragment()).toMatchSnapshot();
  });
});
