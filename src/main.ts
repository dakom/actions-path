import * as core from '@actions/core';

async function run() {
  try {
    core.addPath(core.getInput('path'));
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();

export default run;
