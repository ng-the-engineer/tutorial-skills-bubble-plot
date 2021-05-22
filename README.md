# Plot skills data as bubble chart

This repository is for the tutorial [Visualise your skills with D3](https://medium.com/geekculture/visualize-your-skills-with-d3-e95e5aefff52).

The bubble chart is available [Github Pages](https://ng-the-engineer.github.io/tutorial-skills-bubble-plot/index.html). 🔥

## Data source

The chart use `d3.csv()` to load the data. Function csv takes a parameter `url`. This repository fetches [CSV data from a CORS enabled endpoint](https://tutorial-node-api-k8s-ng-the-engineer.cloud.okteto.net/skills).

The `url` has to be CORS enabled. Therefore, you might get

```
Fetch API cannot load file:///PATH_TO_YOUR_FILE/data.csv.
URL scheme must be "http" or "https" for CORS request.
```

if `url` is a local path, or it is a valid HTTP path but CORS disabled.

## Host a CSV file as an API

Here is a tutorial of exposing CSV data as an HTTP endpoint on Kubernetes
👉[Deploy API on Kubernetes for free](https://medium.com/geekculture/deploy-api-on-kubernetes-for-free-ffe6889aad9d)
