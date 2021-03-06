Package.describe({
  name: 'fds:threejs',
  summary: 'JavaScript 3D library with controls, loaders and polyfill',

  // As three.js releases may contain breaking changes, each release
  // is a major version in semver terms. To derive the Meteor package
  // version from the three.js release tag:
  //
  //   rX -> X.0.0_Y
  //
  // where Y is the packaging version.
  //
  version: '73.0.0_1',
  git: 'https://github.com/foxdog-studios/meteor-threejs',
  documentation: 'README.md'
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.5.1');

  // If you change the array below, yopu must also change build.zsh.
  api.addFiles(
    [
      // Polyfiller (must be loaded first)
      'build/typedarray.js',

      // THREE.js Core
      'build/three.min.js',

      // THREE.js Controls
      'build/DeviceOrientationControls.js',
      'build/EditorControls.js',
      'build/FirstPersonControls.js',
      'build/FlyControls.js',
      'build/MouseControls.js',
      'build/OrbitControls.js',
      'build/OrthographicTrackballControls.js',
      'build/PointerLockControls.js',
      'build/TrackballControls.js',
      'build/TransformControls.js',
      'build/VRControls.js',

      // THREE.js Loaders
      'build/LoaderUtils.js',
      'lib/three.js/examples/js/loaders/AssimpJSONLoader.js',
      'lib/three.js/examples/js/loaders/AWDLoader.js',
      'lib/three.js/examples/js/loaders/BabylonLoader.js',
      'lib/three.js/examples/js/loaders/BinaryLoader.js',
      'lib/three.js/examples/js/loaders/ColladaLoader.js',
      'lib/three.js/examples/js/loaders/DDSLoader.js',
      'lib/three.js/examples/js/loaders/MTLLoader.js',
      'lib/three.js/examples/js/loaders/OBJLoader.js',
      'lib/three.js/examples/js/loaders/OBJMTLLoader.js',
      'lib/three.js/examples/js/loaders/PDBLoader.js',
      'lib/three.js/examples/js/loaders/PLYLoader.js',
      'lib/three.js/examples/js/loaders/PVRLoader.js',
      'lib/three.js/examples/js/loaders/RGBELoader.js',
      'build/STLLoader.js',
      'lib/three.js/examples/js/loaders/SVGLoader.js',
      'lib/three.js/examples/js/loaders/TGALoader.js',
      'lib/three.js/examples/js/loaders/UTF8Loader.js',
      'lib/three.js/examples/js/loaders/VRMLLoader.js',
      'build/VTKLoader.js',

      // Geometries
      'build/ShapeGeometry.js'
    ],
    'client'
  );

  api.export('THREE', 'client');
});

Package.onTest(function (api) {
  api.use(['tinytest', 'fds:threejs']);
  api.addFiles('tests.js', 'client');
});

