// @flow

import { writeFile } from './util/fs';
import yaml from 'js-yaml';
import type { AmazeeConfig } from './parseConfig';

const DEFAULT_CONFIG: AmazeeConfig = {
  sitegroup: 'your_sitegroup',
  deploy_tasks: {
    task1: {
      before_deploy: [],
      after_deploy: [],
    },
  },
};

export default function writeDefaultConfig(filepath: string): Promise<void> {
  const yamlConfig = yaml.safeDump(DEFAULT_CONFIG);
  throw new Error('w0t');
  return writeFile(filepath, yamlConfig);
}
