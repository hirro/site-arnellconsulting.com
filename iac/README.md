# Infrastructure as Code — Azure Static Web App (Bicep)

Bicep creates the Azure Static Web App used to host **arnellconsulting.com** and **www.arnellconsulting.com**. There is **no state file** — Azure Resource Manager holds the current state; you don’t need a backend or store.

## Prerequisites

- [Azure CLI](https://docs.microsoft.com/en-us/cli/azure/install-azure-cli) installed and logged in (`az login`)
- [Bicep](https://learn.microsoft.com/en-us/azure/azure-resource-manager/bicep/install) (or run `az bicep install`)

## Deploy

```bash
cd iac/bicep
az deployment sub create \
  --location "West Europe" \
  --template-file main.bicep \
  --parameters name='arnellconsultingcom' resourceGroupName='site-arnellconsulting-com' location='West Europe' sku='Standard'
```

After deployment, get the deployment token in **Azure Portal** → your Static Web App → **Hantera distributionstoken** (Manage deployment token). Add it as the GitHub Actions secret **AZURE_STATIC_WEB_APPS_API_TOKEN**.

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `name` | `arnellconsultingcom` | Static Web App name (alphanumeric). |
| `resourceGroupName` | `site-arnellconsulting-com` | Resource group name. |
| `location` | `West Europe` | Azure region. |
| `sku` | `Standard` | `Free` or `Standard`. Use Standard for custom domains. |

## Custom domain (arnellconsulting.com / www)

After the Static Web App exists:

1. In **Azure Portal** → your Static Web App → **Custom domains**.
2. Add **arnellconsulting.com** and **www.arnellconsulting.com** as instructed.
3. At your DNS provider, create the CNAME or A records that Azure shows for validation and targeting.

Standard SKU is required for custom domains.
