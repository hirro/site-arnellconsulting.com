// Single Static Web App resource (Microsoft.Web/staticSites)
// API key (deployment token) must be retrieved from Azure Portal after deployment.

targetScope = 'resourceGroup'

@description('Name of the Static Web App')
param name string

@description('Azure region')
param location string

@description('SKU: Free or Standard')
param sku string = 'Standard'

resource staticSite 'Microsoft.Web/staticSites@2023-12-01' = {
  name: name
  location: location
  sku: {
    name: sku
    tier: sku
  }
  properties: {
    allowConfigFileUpdates: true
    publicNetworkAccess: 'Enabled'
  }
}

output defaultHostName string = staticSite.properties.defaultHostname
output name string = staticSite.name
output id string = staticSite.id
