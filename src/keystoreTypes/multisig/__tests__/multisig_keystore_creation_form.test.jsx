/* eslint global-require:0 */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MultisigKeystoreCreationForm from '../multisig_keystore_creation_form';

jest.mock('../../../helpers/web3/connect', () => require('../../../../test/__mocks__/connectMock'));

describe('<MultisigKeystoreCreationForm />', () => {
  test('renders correctly', () => {
    const component = shallow(
      <MultisigKeystoreCreationForm
        formData={{}}
        formChange={jest.fn}
      />,
    );

    expect(toJson(component)).toMatchSnapshot();
  });
});
