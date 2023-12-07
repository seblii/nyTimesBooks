const fs = require('fs-extra');
const YAML = require('yamljs')

const apiKeyParameter = {
  name: 'api-key',
  in: 'query',
  required: true,
  description: 'Your personal API key',
  type: 'string'
}

async function modifyYaml(filePath,destFilePath) {
  try {
    // Load the YAML file
    const fileContents = await fs.readFile(filePath, 'utf8');
    //const data = yaml.load(fileContents);
    const data = YAML.parse(fileContents);

    // Iterate over paths and modify query parameters
    for (const path in data.paths) {
      console.log(path);
      for (const method in data.paths[path]) {
        console.log(`  ${method}`);
        const operation = data.paths[path][method];
        console.log(`  ${operation.summary}`);
        
        
        const hasSecurityProps = Object.keys(operation).indexOf("security") > -1;
        let apiKeyParamIsRequired = false;
        if (hasSecurityProps) {
          operation.security.forEach((securityParam, index) => {
            if (Object.keys(securityParam).indexOf("api-key") > -1 ) {
              apiKeyParamIsRequired = true;
            }
          }) 
        } 

        if (!apiKeyParamIsRequired) continue;

        console.log(`  Adding api-key parameter`);
                
        if (!operation.parameters) operation.parameters = [];
        operation.parameters.push(apiKeyParameter);
      }
    }

    // Convert the object back to YAML
    const newYaml = YAML.stringify(data);

    // Write the modified YAML back to file
    await fs.writeFile(destFilePath, newYaml, 'utf8');
    console.log(`The file ${destFilePath} has been written.`);
  } catch (e) {
    console.error(e);
  }
}

modifyYaml('./config/books-product.yaml', './config/books-product-with-api-key.yaml');
