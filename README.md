
## Project Setup

Install the dependencies.

```shell
$ npm install
```

Create a `.env` file in the root of the project directory. Add the `VUE_APP_GITHUB_ACCESS_TOKEN` environment variable to this file, and set it to a [GitHub access token](https://docs.github.com/en/github/authenticating-to-github/creating-a-personal-access-token).

(`.env`)

```
VUE_APP_GITHUB_ACCESS_TOKEN=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

## Running in Development Environment

Run the application for local development:

```shell
$ npm run serve
```

Navigate to [localhost:8080](http://localhost:8080). You should see your application running. The application hot-reloads on all file changes (state changes are preserved).

### Compilation and Minification for Production

Generate a build optimized for production:

```shell
$ npm run build
```

### Linting Files

Lint files to statically analyze code for potential errors:

```shell
$ npm run lint
```

### Customize Configuration

See [configuration reference](https://cli.vuejs.org/config/) for more information.
