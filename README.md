# kenjy2016

## development

### dependencies
- `node v0.12.7`
Although technically other versions of node should work.

### install
```bash
  npm install
```

### src directory
- /src
  - /img - uncompressed/unminified images
  - /styles - *.sass files
  - /scripts - unminified js files
    - /vendor - js vendor libraries

### watch
```bash
  npm run build
```
This will watch the src directory and build the files into the build directory. This minifies images and javascript, as well as building any sass files.
**Note** - npm run build will clean (delete) the build directory when changes are detected in the src folder.
