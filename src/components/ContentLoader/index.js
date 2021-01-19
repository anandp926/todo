/* eslint-disable */
import React from 'react';
import ContentLoader from 'react-content-loader';

export const CardLoaderOne = () => (
  <ContentLoader
    speed={1}
    width="100%"
    height={'125px'}
    // viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="10" rx="4" ry="4" width="500" height="20" />
    <rect x="10" y="60" rx="3" ry="3" width="100" height="40" />
  </ContentLoader>
);

export const CardLoaderTwo = () => (
  <ContentLoader
    speed={1}
    width="100%"
    height={'125px'}
    // viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="10" rx="4" ry="4" width="500" height="20" />
    <circle cx="30" cy="45" r="10" />
    <rect x="50" y="40" rx="3" ry="3" width="250" height="15" />
    <circle cx="30" cy="75" r="10" />
    <rect x="50" y="70" rx="3" ry="3" width="270" height="15" />
    <circle cx="30" cy="105" r="10" />
    <rect x="50" y="100" rx="3" ry="3" width="250" height="15" />
  </ContentLoader>
);

export const CardLoaderThree = () => (
  <ContentLoader
    speed={1}
    width="100%"
    height={'125px'}
    // viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="200" cy="60" r="50" />
  </ContentLoader>
);

export const CustomerDetailLoader = () => (
  <ContentLoader
    speed={1}
    width="100%"
    height={'30vh'}
    // viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x={`0.8%`} y="15" rx="4" ry="4" width="16%" height="20" />
    <rect x={`85%`} y="15" rx="4" ry="4" width="100" height="20" />
    <rect x={`96%`} y="15" rx="4" ry="4" width="50" height="20" />

    {
      [...Array(4).keys()].map(number => (
        <>
        <rect x={`0.8%`} y={70+(50*number)} rx="4" ry="4" width="30" height="20" />
        <rect x={`5%`} y={70+(50*number)} rx="4" ry="4" width="70%" height="20" />
        <rect x={`85%`} y={70+(50*number)} rx="4" ry="4" width="50" height="20" />
        <rect x={`96%`} y={70+(50*number)} rx="4" ry="4" width="50" height="20" />
        </>
        
      ))
    }
  </ContentLoader>
)