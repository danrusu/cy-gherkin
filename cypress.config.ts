import { defineConfig } from 'cypress';

const webpackPreprocessor = require('@cypress/webpack-preprocessor');

import createBundler from '@bahmutov/cypress-esbuild-preprocessor';
import { addCucumberPreprocessorPlugin } from '@badeball/cypress-cucumber-preprocessor';
import { createEsbuildPlugin } from '@badeball/cypress-cucumber-preprocessor/esbuild';

export default defineConfig({
  e2e: {
    specPattern: '**/*.{spec.ts,feature}',

    // supportFile: './cypress/support/index.ts',

    viewportWidth: 1280,
    viewportHeight: 1024,
    watchForFileChanges: false,
    defaultCommandTimeout: 10_000,
    video: false,

    experimentalOriginDependencies: true,
    experimentalModifyObstructiveThirdPartyCode: true,

    setupNodeEvents,
  },
});

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on(
    'file:preprocessor',
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
