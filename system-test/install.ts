// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {packNTest} from 'pack-n-play';
import {readFileSync} from 'fs';
import {describe, it} from 'mocha';

describe('typescript consumer tests', () => {
  it('should have correct type signature for typescript users', async function () {
    this.timeout(300000);
    const options = {
      packageDir: process.cwd(), // path to your module.
      sample: {
        description: 'typescript based user can use the type definitions',
        ts: readFileSync(
          './system-test/fixtures/sample/src/index.ts'
        ).toString(),
        dependencies: [
          '@google-cloud/datastore',
          'express-session',
          '@types/express-session',
        ],
      },
    };
    await packNTest(options); // will throw upon error.
  });

  it('should have correct type signature for javascript users', async function () {
    this.timeout(300000);
    const options = {
      packageDir: process.cwd(), // path to your module.
      sample: {
        description: 'typescript based user can use the type definitions',
        ts: readFileSync(
          './system-test/fixtures/sample/src/index.js'
        ).toString(),
        dependencies: ['@google-cloud/datastore', 'express-session'],
      },
    };
    await packNTest(options); // will throw upon error.
  });
});
