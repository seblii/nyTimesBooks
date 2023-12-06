const fs = require('fs-extra');
const yaml = require('js-yaml');

async function modifyYaml(filePath,destFilePath) {
  try {
    // Load the YAML file
    const fileContents = await fs.readFile(filePath, 'utf8');
    const data = yaml.load(fileContents);

    // Check if securityDefinitions exists
    if (!data.securityDefinitions) {
      console.log('No securityDefinitions found in the YAML file.');
      return;
    }

    // Iterate over paths and modify query parameters
    for (const path in data.paths) {
      for (const method in data.paths[path]) {
        const operation = data.paths[path][method];
        if (operation.parameters) {
          for (const securityKey in data.securityDefinitions) {
            operation.parameters.push({
              name: securityKey,
              in: 'query',
              required: true,
              type: 'string'
            });
          }
        }
      }
    }

    // Convert the object back to YAML
    const newYaml = yaml.dump(data);

    // Write the modified YAML back to file
    await fs.writeFile(destFilePath, newYaml, 'utf8');
    console.log(`The file ${destFilePath} has been written.`);
  } catch (e) {
    console.error(e);
  }
}

// Replace 'path/to/your/file.yaml' with the path to your YAML file
modifyYaml('./src/config/books-product.yaml', './src/config/books-product-with-api-key.yaml');
