// Azure Static Web App for arnellconsulting.com / www.arnellconsulting.com
// Deploy: az deployment sub create --location <region> --template-file main.bicep [--parameters ...]

targetScope = 'subscription'

@description('Azure region for resource group and Static Web App')
param location string = 'West Europe'

@description('Name of the Static Web App (alphanumeric)')
param name string = 'arnellconsultingcom'

@description('Name of the resource group to create')
param resourceGroupName string = 'site-arnellconsulting-com'

@description('SKU: Free or Standard (Standard required for custom domains)')
param sku string = 'Standard'

resource rg 'Microsoft.Resources/resourceGroups@2024-03-01' = {
  name: resourceGroupName
  location: location
}

module staticWebApp 'static-site.bicep' = {
  scope: rg
  name: 'create-static-web-app'
  params: {
    name: name
    location: location
    sku: sku
  }
}

output defaultHostName string = staticWebApp.outputs.defaultHostName
output staticWebAppName string = staticWebApp.outputs.name
output resourceGroupName string = rg.name
