import React from 'react';
import { render } from '@testing-library/react';
import { KVEditConfigType } from '@base/src/components/KVEditor/KVEditor.types';
import KVItemView from '../KVItemView';

describe('KVItemView', () => {
  const validateKey = new RegExp(/^[a-zA-Z][a-zA-Z0-9]*$/);
  const dispatch = jest.fn();

  const tree = (
    options: KVEditConfigType = { theme: 'light', validateKey, typeNotation: 'string', nested: false }
  ) =>
    render(
      <KVItemView
        key="key"
        item={{ key: 'foo', value: 'bar' }}
        dispatch={dispatch}
        editorOptions={options}
        viewOptions={null}
      />
    );

  test('renders properly', () => {
    const { asFragment } = tree();
    expect(asFragment()).toMatchSnapshot();
  });
});
