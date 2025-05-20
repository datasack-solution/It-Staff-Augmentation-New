import withTM from 'next-transpile-modules'; // Import the transpile-modules package

export default withTM([
  'antd',                // Add 'antd' to transpile
  'rc-pagination',       // Add 'rc-pagination' to transpile
  '@ant-design/icons',   // Add 'ant-design/icons' to transpile
  'rc-util',             // Add 'rc-util' to transpile
  'rc-picker',           // Add 'rc-picker' to transpile
])({
  reactStrictMode: true,
  images: {
    unoptimized:true,
    domains: ['bunny-wp-pullzone-dgpgtislbk.b-cdn.net'], // Replace with your image domains
  },
  // output:'export',
  // basePath: '', // Ensure no subdirectory prefix is added
  // assetPrefix: '', // Make asset paths relative
  assetPrefix: '', // Adjust assets for cPanel subdirectory
  basePath: '',
});
