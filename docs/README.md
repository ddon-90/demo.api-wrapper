## Name:
API Extension Example

## Description:
Example of new REST APIs built on top of VTEX IO.

Exposed routes:
```
"routes": {
  "updatePrice": {
    "path": "/_v/api/pricing/prices/:refId",
    "public": true
  }
}
```

_Note: The behaviour of this API is the same as the [Create or Update Base Price or Fixed Prices](https://developers.vtex.com/docs/api-reference/pricing-api#put-/pricing/prices/-itemId-?endpoint=put-/pricing/prices/-itemId-) with the only difference that you need to use the SKU Reference ID instead of the SKU ID_

## Proof points:
- External API calls
- Build new REST APIs

## How to demo:

1. Clone/Download this repository and open it with a code editor of your choice, eg. VSCode

2. Open the terminal and login to your VTEX account

```
vtex login {{account}}
```

3. Create a new development workspace or use an existing one

```
vtex use {{workspace}}
```

4. Add the account name as the vendor on `manifest.json` file

```
{
  "name": "update-price-api-wrapper",
  "vendor": "{{account}}",
  "version": "0.0.1",
  "title": "API Example",
  "description": "Example of new REST APIs built on top of VTEX IO.",
  "mustUpdateAt": "2018-01-04",
  ...
  ...
}
```

5. Link the project

```
vtex link
```

6. After the linking, open Postman and make some API calls

```
PUT
https://{{workspace}}--{{account}}.myvtex.com/_v/api/pricing/prices/:refId

Request Body:
{
  "markup": null,
  "listPrice": 399,
  "basePrice": 299,
  "costPrice": 100,
  "fixedPrices": [
    {
      "tradePolicyId": "1",
      "value": 199,
      "listPrice": 299,
      "minQuantity": 1,
      "dateRange": {
        "from": "2023-09-07T00:00:00+01:00",
        "to": "2023-09-09T23:59:59+01:00"
      }
    }
  ]
}
```
