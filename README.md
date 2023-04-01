# My ul library react components

## Project management

-   [GitHub project](https://github.com/users/LumbagoG/projects/1)
-   [Asana](https://app.asana.com/0/1204200821295672/1204200821295672)

## Ingredients:

-   React js + typescript
-   Vite
-   Storybook
-   Styled components
-   Lint stages (husky + eslint + prettier + stylelint)
-   CI/CD
-   Chromatic
-   Docker

## Links for app resources:

-   [Figma ui design](https://www.figma.com/file/Aq10VUMGoFEoKWoBccdelr/myReactTsLib?node-id=0-1&t=DBCdWMr1eON7Qb1I-0)
-   [Chromatic project](https://www.chromatic.com/library?appId=6405776599109c9529f5c23a)
-   [Chromatic app](https://6405776599109c9529f5c23a-jwdylatwub.chromatic.com/?path=/story)
-   [Github pages](https://lumbagog.github.io/myReactTsLib/)

## Startup project

### Docker (production)

```
docker run -t my-react-ts-lib .
```

```
docker run -p 80:80 my-react-ts-lib
```

### Local (dev)

```
npm i && npm run storybook-dev
```

### Local (production)

```
npm i && npm run storybook-build && npm run storybook-build-preview
```
