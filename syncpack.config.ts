import type {RcFile} from 'syncpack';

export default ({
  // https://jamiemason.github.io/syncpack/config/custom-types/
  customTypes: {
    engines: {
      strategy: 'versionsByName',
      path: 'engines'
    },
    nodeEngine: {
      strategy: 'version',
      path: 'engines.node'
    },
    pnpmEngine: {
      strategy: 'version',
      path: 'engines.pnpm'
    },
    packageManager: {
      strategy: 'name@version',
      path: 'packageManager'
    }
  },
  formatBugs: true,
  formatRepository: false,
  indent: '  ',
  semverGroups: [
    {
      dependencyTypes: [
        'prod',
        'dev'
      ],
      range: '',
      dependencies: ['**'],
      packages: ['**']
    },
    {
      dependencyTypes: ['peer'],
      range: '^',
      dependencies: ['^**'],
      packages: ['**']
    }
  ],
  sortAz: [
    'bin',
    'contributors',
    'dependencies',
    'devDependencies',
    'keywords',
    'peerDependencies',
    'resolutions',
    'scripts',
  ],
  sortExports: [
    'types',
    'node',
    'browser',
    'import',
    'require',
    'development',
    'production',
    'default'
  ],
  sortFirst: [
    '$schema',
    'name',
    'version',
    'license',
    'description',
    'homepage',
    'author',
    'contributors',
    'repository',
    'bugs',
    'keywords',
    'engineStrict',
    'engines',
    'packageManager',
    'type',
    'bin',
    'main',
    'module',
    'exports',
    'files',
    'scripts',
    'dependencies',
    'devDependencies',
    'peerDependencies'
  ],
  sortPackages: true,
  versionGroups: [
    {
      label: '@types packages should only be under devDependencies',
      dependencies: ['@types/**'],
      dependencyTypes: ['!dev'],
      isBanned: true
    },
    {
      label: 'Local packages should be pinned to workspace:*',
      dependencies: ['$LOCAL'],
      dependencyTypes: [
        'prod',
        'dev'
      ],
      packages: ['**'],
      pinVersion: 'workspace:*'
    }
  ]
} satisfies RcFile);
