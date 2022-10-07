import { Button } from './index.jsx';

export default {
  title: 'UI-Kit/Button',
  component: Button,
};

const Template = (args) => <Button {...args} />;

const props = {
  text: 'Hello',
  handleChange: () => console.log('Button click'),
  page: false,
  theme: 'light',
};

export const Light = Template.bind({});
Light.args = {
  ...props,
  theme: 'light',
};
