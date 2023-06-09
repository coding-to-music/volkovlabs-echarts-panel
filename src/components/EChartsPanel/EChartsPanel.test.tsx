import { shallow } from 'enzyme';
import React from 'react';
import { LoadingState, toDataFrame } from '@grafana/data';
import { EChartsPanel } from './EChartsPanel';

/**
 * Skip Register Maps
 */
jest.mock('../../maps', () => ({
  registerMaps: () => {
    return;
  },
}));

/**
 * Panel
 */
describe('Panel', () => {
  it('Should find component', async () => {
    const getComponent = ({ options = { name: 'data' }, ...restProps }: any) => {
      const data = {
        series: [
          toDataFrame({
            name: 'data',
            fields: [],
          }),
        ],
      };
      return <EChartsPanel data={data} {...restProps} options={options} />;
    };

    const wrapper = shallow(getComponent({}));
    const div = wrapper.find('div');
    expect(div.exists()).toBeTruthy();
  });

  it('Should find component with Done state', async () => {
    const getComponent = ({ options = { name: 'data' }, ...restProps }: any) => {
      const data = {
        state: LoadingState.Done,
        series: [
          toDataFrame({
            name: 'data',
            fields: [],
          }),
        ],
      };
      return <EChartsPanel data={data} {...restProps} options={options} />;
    };

    const wrapper = shallow(getComponent({}));
    const div = wrapper.find('div');
    expect(div.exists()).toBeTruthy();
  });

  it('Should find component for Streaming', async () => {
    const getComponent = ({ options = { name: 'data' }, ...restProps }: any) => {
      const data = {
        state: LoadingState.Streaming,
        series: [
          toDataFrame({
            name: 'data',
            fields: [],
          }),
        ],
      };
      return <EChartsPanel data={data} {...restProps} options={options} />;
    };

    const wrapper = shallow(getComponent({}));
    const div = wrapper.find('div');
    expect(div.exists()).toBeTruthy();
  });
});
