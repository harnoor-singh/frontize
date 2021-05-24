# Frontize Minified CLI

This is a minified version of the frontize CLI, with the only purpose of starting the app locally, instead of repeatedly downoading the full CLI for every run.

# Setup

The first run of `npx frontize init` will automatically install it globally.
To run it, type `fz <command> [options]`.

# Working

As the minified verion, this will only have in-built support for the _start_ command, but it can directly make requests to the main CLI via npx.

It will also check for updates automatically
