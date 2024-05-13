const { defineConfig } = require('11ty.ts');

module.exports = defineConfig(function (eleventy) {

  eleventy.addPassthroughCopy({
    dist: 'moloko'
  });

  return {
    dir: {
      input: 'tests',
      includes: 'include',
      output: 'public'
    }
  };
});
