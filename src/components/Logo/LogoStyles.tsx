const colorOrange = '#E36F3D';
const colorGrey = '#E1D7CA';
const colorBlue = '#2C4DFF';

const defaultSize = {
  fontSize: '20vh',
  sphereSize: 'max(15vw)',
  marginTop: 'max(1vh)',
  marginLeft: 'max(-20vh)',
};

const smallSize = {
  fontSize: '15vh',
  sphereSize: 'max(11vw)',
  marginTop: 'max(1.5vh)',
  marginLeft: 'max(-15vh)',
};

export const LogoStyleDefault = {
  color: '#FFFFFF',
  '--circleColor': colorOrange,
  '--fontSize': defaultSize.fontSize,
  '--sphereSize': defaultSize.sphereSize,
  '--marginTop': defaultSize.marginTop,
  '--marginLeft': defaultSize.marginLeft,
};

export const LogoStyleWO = {
  color: '#FFFFFF',
  '--circleColor': colorOrange,
  '--fontSize': smallSize.fontSize,
  '--sphereSize': smallSize.sphereSize,
  '--marginTop': smallSize.marginTop,
  '--marginLeft': smallSize.marginLeft,
};

export const LogoStyleGB = {
  color: '#E1D7CA',
  '--circleColor': colorBlue,
  '--fontSize': defaultSize.fontSize,
  '--sphereSize': defaultSize.sphereSize,
  '--marginTop': defaultSize.marginTop,
  '--marginLeft': defaultSize.marginLeft,
};

export const LogoStyleBG = {
  color: '#000000',
  '--circleColor': colorGrey,
  '--fontSize': smallSize.fontSize,
  '--sphereSize': smallSize.sphereSize,
  '--marginTop': smallSize.marginTop,
  '--marginLeft': smallSize.marginLeft,
};

export const LogoStyleBB = {
  color: '#000000',
  '--circleColor': colorBlue,
  '--fontSize': smallSize.fontSize,
  '--sphereSize': smallSize.sphereSize,
  '--marginTop': smallSize.marginTop,
  '--marginLeft': smallSize.marginLeft,
};
