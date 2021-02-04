/**********************************************************************************
 *                                                                                *
 *    Copyright (C) 2021  SYMON Contributors                                      *
 *                                                                                *
 *   This program is free software: you can redistribute it and/or modify         *
 *   it under the terms of the GNU Affero General Public License as published     *
 *   by the Free Software Foundation, either version 3 of the License, or         *
 *   (at your option) any later version.                                          *
 *                                                                                *
 *   This program is distributed in the hope that it will be useful,              *
 *   but WITHOUT ANY WARRANTY; without even the implied warranty of               *
 *   MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the                *
 *   GNU Affero General Public License for more details.                          *
 *                                                                                *
 *   You should have received a copy of the GNU Affero General Public License     *
 *   along with this program.  If not, see <https://www.gnu.org/licenses/>.       *
 *                                                                                *
 **********************************************************************************/

import { Story, Meta } from "@storybook/react/types-6-0";

import { Panel, PanelProps } from "./Panel";

export default {
  title: "Panel",
  component: Panel,
} as Meta;

const Template: Story<PanelProps> = args => (
  <Panel {...args}>Panel Content</Panel>
);

export const Primary = Template.bind({});
Primary.args = {
  title: "Login",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  title: "Setup",
  color: "secondary",
};
